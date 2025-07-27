export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Jul 2020-Nov 2021",
    title: "Platforms Test Engineer",
    company: "Datalogic VN",
    // description:
    //   "Developed novel algorithms for causal structure learning in reinforcement learning settings",
    // advisor: "Peter Wang",
    companyUrl: "https://www.datalogic.com/eng/index.html",
  },
  {
    date: "Dec 2021-Jan 2023",
    title: "AI Engineer",
    company: "TRUONG MINH THINH TECHNOLOGY JOINT STOCK COMPANY",
    // description:
    //   "Worked on improving robustness of large language models to distribution shifts",
    // manager: "Elise Brown",
    companyUrl: "https://tmtco.asia/",
  },
  {
    date: "Jan 2022-May 2024",
    title: "AI Engineer",
    company: "Kyons - partime",
    // description:
    //   "Worked on improving robustness of large language models to distribution shifts",
    // manager: "Elise Brown",
    companyUrl: "hhttps://kyons.vn/en/",
  },
];
