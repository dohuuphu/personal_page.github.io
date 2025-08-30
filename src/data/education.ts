export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2023—Present",
    institution: "National Yang Ming Chiao Tung University",
    degree: "Ph.D. in Computer Science",
    advisor: 
    `<p class="mb-4 text-base leading-relaxed">
    <a
          href="https://nycu-acm.github.io/ACM_NYCU_website/"
          class="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Prof. Ching-Chun Huang
        </a>`,
  },
  {
    year: "2016—2020",
    institution: "HCMC University of Technology and Education",
    degree: "B.S. in Electrical and Electronics Engineering",
    // thesis: "Algorithmic Approaches to Causal Discovery",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
];
