export const sectionOrder = [
  { id: "hero", label: "封面" },
  { id: "era", label: "时代" },
  { id: "journey", label: "入京" },
  { id: "constraints", label: "困境" },
  { id: "urban", label: "都市" },
  { id: "mineko", label: "美祢子" },
  { id: "mechanism", label: "机制" },
  { id: "lost", label: "迷途" },
  { id: "echo", label: "回声" },
] as const;

export const archiveCards = [
  {
    number: "01",
    title: "家庭期待",
    summary: "离家未断，责任先到。",
    textEvidence: "来自故乡的支持并没有真正把他托起来，反而让他的独立始终慢半步到来。",
    historicalNote: "明治后期青年读书仍高度依赖家庭资源，离乡读书常伴随情感与经济的双重牵引。",
    interpretation: "故乡不是已经离开的背景，而是一只一直没有完全松开的手。",
  },
  {
    number: "02",
    title: "经济依赖",
    summary: "独立未至，自由先来。",
    textEvidence: "他被推到一个要自己决定前途的世界里，却还没有真正属于自己的经济基础。",
    historicalNote: "高等教育扩张并不等于普遍独立，学生生活成本与未来回报之间始终存在落差。",
    interpretation: "自由先被想象出来，独立却迟迟没有真正到来。",
  },
  {
    number: "03",
    title: "学业压力",
    summary: "大学不只传授知识，也悄悄制造比较。",
    textEvidence: "东京帝国大学意味着前途，也意味着更密的竞争与更高的自我怀疑。",
    historicalNote: "大学制度既是知识入口，也是国家、阶层与职业流动的过滤器。",
    interpretation: "他的犹疑不只来自情感，也来自一种没有被明说的比较压力。",
  },
  {
    number: "04",
    title: "社交失配",
    summary: "都城的规则，从不明说。",
    textEvidence: "在东京，判断往往先于真诚，许多关系都建立在微妙却隐约的分寸之上。",
    historicalNote: "都市生活提升了流动性，也让关系、阶层与教养判断变得更加微妙而隐蔽。",
    interpretation: "他不是完全看不见规则，而是还没学会怎样在这些规则里自然行动。",
  },
] as const;

export const urbanScenes = [
  {
    title: "电车",
    keyword: "判断延迟",
    quote: "世界先到来，理解总慢半拍。",
    description: "现代都市先撞上来，理解总要晚一点。",
  },
  {
    title: "池边",
    keyword: "欲望投射",
    quote: "水面让距离看起来更近。",
    description: "观看被放大了，理解却像倒影一样总差一点。",
  },
  {
    title: "音乐会",
    keyword: "教养压力",
    quote: "会场中的沉默，也是一种阶层语言。",
    description: "现代社交要求感受力，也要求一种看上去毫不费力的得体。",
  },
  {
    title: "散步",
    keyword: "暧昧秩序",
    quote: "走在一起，不等于彼此抵达。",
    description: "亲近与悬置，常常同时存在于同一段路上。",
  },
  {
    title: "校园",
    keyword: "主体试炼",
    quote: "知识场域里，也有情感的竞争。",
    description: "大学空间既理性又冷酷，它不断提醒一个青年：你还没有真正站稳自己。",
  },
] as const;

export const mechanism = {
  constraints: ["家庭期待", "经济依赖", "学业压力", "社交失配"],
  interior: ["羞怯", "犹疑", "欲望投射", "自我分裂"],
  outcomes: ["关系错失", "行动停滞", "主体悬置"],
} as const;
