/**
 * The four areas of expertise. The hero rotator and the "Player and coach"
 * section both read from this list, so the two always match.
 */
export interface ExpertiseGroup {
  heading: string;
  items: string[];
}

export interface ExpertiseArea {
  id: string;
  title: string;
  line: string;
  groups: ExpertiseGroup[];
}

export const areas: ExpertiseArea[] = [
  {
    id: "player-coach-leadership",
    title: "Player-Coach Leadership",
    line: "A hands-on leader who grows senior designers",
    groups: [
      {
        heading: "Growing a team",
        items: [
          "Managing senior designers",
          "Teaching systems thinking",
          "Setting individual growth plans",
        ],
      },
      {
        heading: "Leading small teams through fast growth",
        items: [
          "Stitch Fix: first design hire, created and led the platform design team",
          "Tive: hired two designers, launched career ladders and growth plans",
          "Anomalie: Head of Design through a digital rebrand",
        ],
      },
      {
        heading: "Scaling enterprise products",
        items: [
          "Design processes that meet teams where they are",
          "Repeatable patterns for cross-platform designs and architecture",
        ],
      },
    ],
  },
  {
    id: "design-systems",
    title: "Design Systems",
    line: "Architect of high-impact design systems",
    groups: [
      {
        heading: "Owning the system as a product and a platform",
        items: [
          "Roadmapping, strategic alignment, and prioritization",
          "Ownership from ideation through migration, maintenance, and evolution",
        ],
      },
      {
        heading: "Design and code alignment",
        items: [
          "Token implementation and management",
          "Figma-to-code and code-to-Figma",
          "Technical architecture",
        ],
      },
      {
        heading: "Repeatability",
        items: [
          "Cross-team governance, contribution, and release processes",
          "Documentation for humans and machines",
          "Faster time-to-live while maintaining high quality",
        ],
      },
      {
        heading: "Consistency of craft",
        items: [
          "WCAG compliance baked in, with easily tested, highly extensible designs",
          "Design judgment encoded into guidelines",
          "AI-assisted UI audits, code alignment, and quality assurance",
        ],
      },
    ],
  },
  {
    id: "product-and-business-strategy",
    title: "Product and Business Strategy",
    line: "Turning ambiguous objectives into clear product direction",
    groups: [
      {
        heading: "Opportunity identification and problem framing",
        items: [
          "Identifying customer problems",
          "Risk analysis and solution planning",
        ],
      },
      {
        heading: "Product vision and direction",
        items: [
          "Design roadmapping",
          "Translating ambiguous objectives into clear product strategy",
        ],
      },
      {
        heading: "Strategic prioritization and tradeoffs",
        items: [
          "Balancing customer value, business impact, technical feasibility, and resources",
          "Scoping and release planning, aligned with engineering on delivery",
        ],
      },
      {
        heading: "Business impact and value creation",
        items: [
          "Anomalie: rebrand increased engagement 25% and retention 40%",
          "Modern Health: personalized home screen raised return rate 25% against a 30-day benchmark",
          "Connecting decisions to adoption, retention, and revenue through monetization, branding, and positioning",
        ],
      },
    ],
  },
  {
    id: "design-engineering-with-ai",
    title: "Design Engineering with AI",
    line: "Prototyping in code and shipping production-ready designs with Claude",
    groups: [
      {
        heading: "Designing in code",
        items: [
          "Proposing and pushing production-ready designs",
          "Designing with real data: an object card pattern that renders UI from any data",
          "Using Claude to keep design decisions in sync with production code",
        ],
      },
      {
        heading: "AI prototyping for rapid decision-making",
        items: [
          "Claude prototypes in code to test direction before engineering builds it",
          "Risk-based validation that tests direction earlier and reduces downstream rework",
        ],
      },
    ],
  },
];

/** Anchor on the page for an area's section. */
export const areaAnchor = (id: string) => `#expertise-${id}`;
