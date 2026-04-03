// Subject definitions — primary navigation structure
// Colors use a cohesive palette: indigo/slate base with warm accents
module.exports = [
  {
    slug: "polity",
    name: "Polity & Constitution",
    icon: "\u2696\uFE0F",
    color: "#7c3aed",
    description: "Indian Constitution, governance, Parliament, judiciary, federalism, local government",
    gs_papers: ["gs2"],
    syllabus_sections: [
      "Indian Constitution & Polity"
    ]
  },
  {
    slug: "economy",
    name: "Indian Economy",
    icon: "\uD83D\uDCB0",
    color: "#0369a1",
    description: "Economic development, budgeting, agriculture, industry, infrastructure, trade, poverty, demographics, fiscal policy",
    gs_papers: ["gs3"],
    syllabus_sections: [
      "Indian Economy"
    ]
  },
  {
    slug: "geography",
    name: "Geography",
    icon: "\uD83C\uDF0D",
    color: "#b45309",
    description: "Physical geography, Indian geography, human & economic geography, world geography",
    gs_papers: ["gs1"],
    syllabus_sections: [
      "Physical Geography",
      "Indian Geography",
      "Human & Economic Geography",
      "World Geography"
    ]
  },
  {
    slug: "history-culture",
    name: "History & Culture",
    icon: "\uD83C\uDFDB\uFE0F",
    color: "#9f1239",
    description: "Ancient to modern India, freedom struggle, world history, art forms, architecture, post-independence consolidation",
    gs_papers: ["gs1"],
    syllabus_sections: [
      "Indian Heritage & Culture",
      "Ancient India",
      "Medieval Indian History",
      "Modern Indian History",
      "Post-Independence India",
      "World History"
    ]
  },
  {
    slug: "environment",
    name: "Environment & Ecology",
    icon: "\uD83C\uDF3F",
    color: "#047857",
    description: "Biodiversity, conservation, pollution, climate change, disaster management",
    gs_papers: ["gs3"],
    syllabus_sections: ["Environment & Biodiversity"]
  },
  {
    slug: "science-tech",
    name: "Science & Technology",
    icon: "\uD83D\uDD2C",
    color: "#4338ca",
    description: "Space, biotech, IT, nanotech, defence tech, IPR, indigenous technology",
    gs_papers: ["gs3"],
    syllabus_sections: ["Science & Technology"]
  },
  {
    slug: "international-relations",
    name: "International Relations",
    icon: "\uD83E\uDD1D",
    color: "#0e7490",
    description: "India's foreign policy, neighbourhood, global groupings, international institutions",
    gs_papers: ["gs2"],
    syllabus_sections: ["International Relations"]
  },
  {
    slug: "society",
    name: "Society & Social Issues",
    icon: "\uD83D\uDC65",
    color: "#be123c",
    description: "Indian society, diversity, women, urbanization, globalization, communalism, secularism",
    gs_papers: ["gs1", "gs2"],
    syllabus_sections: ["Indian Society"]
  },
  {
    slug: "ethics",
    name: "Ethics & Integrity",
    icon: "\uD83E\uDDED",
    color: "#854d0e",
    description: "Ethics, attitude, aptitude, emotional intelligence, moral thinkers, case studies",
    gs_papers: ["gs4"],
    quiz: false,   // GS4 Mains only — no Prelims MCQs
    syllabus_sections: [
      "Ethics, Integrity & Aptitude"
    ]
  },
  {
    slug: "security",
    name: "Internal Security",
    icon: "\uD83D\uDEE1\uFE0F",
    color: "#1e3a5f",
    description: "Extremism, cyber security, border management, security forces, money laundering",
    gs_papers: ["gs3"],
    syllabus_sections: ["Internal Security"]
  },
  {
    slug: "general-science",
    name: "General Science",
    icon: "\u2697\uFE0F",
    color: "#0d9488",
    description: "Physics, chemistry, biology, human body systems, genetics, biotechnology, diseases & nutrition",
    gs_papers: ["gs3"],
    syllabus_sections: ["General Science"]
  },
  {
    slug: "disaster-management",
    name: "Disaster Management",
    icon: "\u26A0\uFE0F",
    color: "#dc2626",
    description: "Natural & man-made disasters, vulnerability, resilience, NDMA, SDMA, disaster preparedness & response",
    gs_papers: ["gs3"],
    syllabus_sections: ["Disaster Management"]
  },
  {
    slug: "essay",
    name: "Essay Paper",
    icon: "\u270D\uFE0F",
    color: "#7c2d12",
    description: "UPSC Essay Paper (Paper I of Mains) — structure, writing framework, previous year topics 2013–2025, and category-wise approach for philosophical, socioeconomic, and science–ethics essays",
    gs_papers: ["essay"],
    hub_url: "/essay/",
    syllabus_sections: ["Essay Paper"]
  }
];
