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
    id: "design-systems",
    title: "Design Systems",
    line: "Architect of high-impact design systems",
    groups: [
      {
        heading: "Owning the system as a product and a platform",
        items: [
          "Design system roadmapping",
          "Strategic alignment and prioritization",
          "Entire system ownership, from ideation to implementation, migration, maintenance, and evolution",
        ],
      },
      {
        heading: "Design and code alignment",
        items: [
          "Token implementation and management",
          "Figma-to-code and code-to-Figma alignment",
          "Technical architecture",
        ],
      },
      {
        heading: "Repeatability",
        items: [
          "Cross-team governance of the design system",
          "Contribution and release processes",
          "Documentation for humans and machines to understand the system",
          "Faster time-to-live while maintaining high quality",
        ],
      },
      {
        heading: "Consistency of craft",
        items: [
          "WCAG compliance baked into the design system",
          "Visual and interaction designs that are easily tested and highly extensible",
          "Design judgment encoded into design system guidelines",
          "AI-assisted UI audits, code alignment, and quality assurance",
        ],
      },
    ],
  },
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
          "Stitch Fix: first design hire, then helped grow the team to 15+ designers and researchers",
          "Tive: hired three designers and launched career ladders with individualized growth plans for every level",
          "Anomalie: led design as Head of Design through a digital rebrand and transformation",
        ],
      },
      {
        heading: "Scaling enterprise products",
        items: [
          "Setting up design processes that meet design teams where they are",
          "Establishing repeatable patterns for cross-platform designs and architecture",
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
          "Scoping projects, planning release schedules, and aligning with engineering on delivery",
        ],
      },
      {
        heading: "Business impact and value creation",
        items: [
          "Connecting decisions to adoption, retention, and revenue opportunities",
          "Monetization through user experience",
          "Product branding and positioning",
          "Anomalie: led a digital rebrand that increased user engagement by 25% and retention by 40%",
          "Modern Health: designed a personalized home screen that raised the customer return rate by 25% against a 30-day benchmark",
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
          "Designing with real data: an object card pattern that renders UI from any data object",
          "Using Claude to turn code and API documentation into design documents",
        ],
      },
      {
        heading: "AI prototyping for rapid decision-making",
        items: [
          "Prototyping in code with Claude to test product direction before engineering builds it",
          "Risk-based design validation that tests product direction earlier and reduces downstream design and engineering rework",
        ],
      },
      {
        heading: "Engineering roots",
        items: [
          "First front-end engineer at Stitch Fix",
          "Built UI libraries in React and Sass",
        ],
      },
    ],
  },
];

/** Anchor on the page for an area's section. */
export const areaAnchor = (id: string) => `#expertise-${id}`;
