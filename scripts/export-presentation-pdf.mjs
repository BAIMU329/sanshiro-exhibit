import fs from "node:fs/promises";
import path from "node:path";
import { spawn } from "node:child_process";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const inputPath = path.join(root, "presentation-script.md");
const htmlPath = path.join(root, "presentation-script.print.html");
const pdfPath = path.join(root, "presentation-script.pdf");

const browserCandidates = [
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
];

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function formatInline(value) {
  return escapeHtml(value).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}

function flushParagraph(lines, blocks) {
  if (!lines.length) return;
  blocks.push(`<p>${lines.map(formatInline).join("<br />")}</p>`);
  lines.length = 0;
}

function flushList(listType, items, blocks) {
  if (!items.length) return;
  const tag = listType === "ol" ? "ol" : "ul";
  blocks.push(
    `<${tag}>${items.map((item) => `<li>${formatInline(item)}</li>`).join("")}</${tag}>`,
  );
  items.length = 0;
}

function markdownToHtml(markdown) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const blocks = [];
  const paragraphLines = [];
  const listItems = [];
  let listType = null;

  const closeOpenStructures = () => {
    flushParagraph(paragraphLines, blocks);
    flushList(listType, listItems, blocks);
    listType = null;
  };

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();
    const trimmed = line.trim();

    if (!trimmed) {
      closeOpenStructures();
      continue;
    }

    if (trimmed === "---") {
      closeOpenStructures();
      blocks.push("<hr />");
      continue;
    }

    const headingMatch = trimmed.match(/^(#{1,3})\s+(.*)$/);
    if (headingMatch) {
      closeOpenStructures();
      const level = headingMatch[1].length;
      blocks.push(`<h${level}>${formatInline(headingMatch[2])}</h${level}>`);
      continue;
    }

    const orderedMatch = trimmed.match(/^\d+\.\s+(.*)$/);
    if (orderedMatch) {
      flushParagraph(paragraphLines, blocks);
      if (listType && listType !== "ol") {
        flushList(listType, listItems, blocks);
      }
      listType = "ol";
      listItems.push(orderedMatch[1]);
      continue;
    }

    const bulletMatch = trimmed.match(/^-\s+(.*)$/);
    if (bulletMatch) {
      flushParagraph(paragraphLines, blocks);
      if (listType && listType !== "ul") {
        flushList(listType, listItems, blocks);
      }
      listType = "ul";
      listItems.push(bulletMatch[1]);
      continue;
    }

    flushList(listType, listItems, blocks);
    listType = null;
    paragraphLines.push(trimmed);
  }

  closeOpenStructures();
  return blocks.join("\n");
}

function buildHtml(body) {
  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>《迷途东京》网站讲解稿</title>
  <style>
    @page {
      size: A4;
      margin: 16mm 14mm 18mm;
    }

    :root {
      color-scheme: light;
      --paper: #f8f2e8;
      --ink: #1f1a17;
      --muted: #6a5f58;
      --line: rgba(49, 33, 20, 0.16);
      --accent: #8b3a2b;
    }

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: "Noto Serif SC", "Source Han Serif SC", "Songti SC", "SimSun", serif;
      color: var(--ink);
      background:
        radial-gradient(circle at top, rgba(139, 58, 43, 0.08), transparent 34%),
        linear-gradient(180deg, #fbf6ef 0%, var(--paper) 100%);
      line-height: 1.72;
      font-size: 12pt;
    }

    main {
      max-width: 180mm;
      margin: 0 auto;
      padding: 10mm 8mm 12mm;
    }

    h1, h2, h3 {
      page-break-after: avoid;
      break-after: avoid;
      line-height: 1.25;
      margin: 0 0 10px;
      font-weight: 700;
    }

    h1 {
      font-size: 24pt;
      letter-spacing: 0.04em;
      padding-bottom: 12px;
      border-bottom: 2px solid rgba(139, 58, 43, 0.35);
      margin-bottom: 18px;
    }

    h2 {
      font-size: 16pt;
      margin-top: 24px;
      color: var(--accent);
    }

    h3 {
      font-size: 13.5pt;
      margin-top: 18px;
    }

    p {
      margin: 0 0 10px;
      text-align: justify;
    }

    ul, ol {
      margin: 0 0 12px 1.4em;
      padding: 0;
    }

    li {
      margin: 0 0 4px;
    }

    hr {
      border: 0;
      border-top: 1px solid var(--line);
      margin: 18px 0;
    }

    strong {
      color: #5b1f14;
      font-weight: 700;
    }
  </style>
</head>
<body>
  <main>
    ${body}
  </main>
</body>
</html>`;
}

async function findBrowser() {
  for (const candidate of browserCandidates) {
    try {
      await fs.access(candidate);
      return candidate;
    } catch {}
  }
  throw new Error("No supported browser found.");
}

function runBrowser(browserPath, inputFile, outputFile) {
  const fileUrl = pathToFileURL(inputFile).href;
  const userDataDir = path.join(root, ".pdf-browser-profile");
  const args = [
    "--headless",
    "--disable-gpu",
    "--allow-file-access-from-files",
    "--no-pdf-header-footer",
    `--user-data-dir=${userDataDir}`,
    `--print-to-pdf=${outputFile}`,
    fileUrl,
  ];

  return new Promise((resolve, reject) => {
    const child = spawn(browserPath, args, { stdio: "ignore" });
    child.on("error", reject);
    child.on("exit", (code) => {
      if (code === 0) {
        resolve();
        return;
      }
      reject(new Error(`Browser exited with code ${code}`));
    });
  });
}

async function main() {
  const markdown = await fs.readFile(inputPath, "utf8");
  const body = markdownToHtml(markdown);
  const html = buildHtml(body);

  await fs.writeFile(htmlPath, html, "utf8");

  const browserPath = await findBrowser();
  await runBrowser(browserPath, htmlPath, pdfPath);

  console.log(`HTML: ${htmlPath}`);
  console.log(`PDF: ${pdfPath}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
