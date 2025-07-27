export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Huu-Phu Do",
  title: "Ph.D. Candidate",
  institution: "National Yang Ming Chiao Tung University (NYCU)",
  // Note that links work in the description
  // description:
  //   "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Hello, thanks for dropping by!<br> I'm pursuing my PhD at the <a href='https://www.stanford.edu'>ACM Lab</a>, NYCU, Taiwan. <br><br>  Under the 'supervision of Prof. Chin-Chung Huang, my research interests lie in <br>-Generative AI <br>-Physics-World Model.",
  description: 
      `<p class="mb-4 text-m leading-relaxed ">
        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp👋Hello, thanks for dropping by!
      </p>
      <p class="mb-4 text-base leading-relaxed">
        I’m pursuing my PhD at the
        <a
          href="https://nycu-acm.github.io/ACM_NYCU_website/"
          style="color: #0ea5e9"
          class="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          ACM Lab
        </a>,
        NYCU, Taiwan.

      <p class="mb-4 text-base leading-relaxed">
      <strong>Interests</strong>:
      <br> - Generative AI 2D/3D</li>
      <br> - Physical AI</li>
      <br> - World Model</li>
            </p>
  `,
     
// description: `
//   <div class="mb-4 text-base leading-relaxed">
//     <p class="mb-4">
//       👋 Hello, thanks for dropping by!
//     </p>
//     <p class="mb-4">
//       I’m pursuing my PhD at the
//       <a
//   href="https://nycu-acm.github.io/ACM_NYCU_website/"
//   class="!text-sky-500 hover:underline"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//         ACM Lab
//       </a>, NYCU, Taiwan.
//     </p>
//     <strong>Interests</strong>:
//     <br> - Generative AI 2D/3D</li>
//       <br> - Physical AI</li>
//       <br> - World Model</li>
//             </p>
//   `,

  email: "dohuuphu25@gmail.com",
  imageUrl:
    "/images/me.jpg",
    // "https://drive.google.com/uc?export=view&id=1bAq58pVoAK4rJ74mwfgaUfzSrgf5noH2",
  googleScholarUrl: "https://scholar.google.com/citations?user=1I86inAAAAAJ&hl=en&authuser=1",
  // githubUsername: "janesmith",
  linkedinUsername: "do-huu-phu-6734771a7",
  // twitterUsername: "janesmith",
  // blogUrl: "https://",
  // cvUrl: "https://",
  // institutionUrl: "https://www.stanford.edu",
  // altName: "",
  // secretDescription: "I like dogs.",
};
