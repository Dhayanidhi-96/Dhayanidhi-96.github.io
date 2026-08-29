export interface Achievement {
  value: string;
  label: string;
  description: string;
}

export const achievements: Achievement[] = [
  {
    value: "2",
    label: "Production AI Apps",
    description: "Deployed and accessible to real users",
  },
  {
    value: "10,000+",
    label: "LinkedIn Impressions",
    description: "Organic reach, zero paid promotion",
  },
  {
    value: "13,000+",
    label: "Research Papers Indexed",
    description: "Semantic search system",
  },
  {
    value: "<500ms",
    label: "Query Response Time",
    description: "With Redis caching layer",
  },
];
