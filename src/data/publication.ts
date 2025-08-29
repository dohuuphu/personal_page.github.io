export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  // {
  //   year: "2024",
  //   conference: "NeurIPS",
  //   title: "Scalable Causal Discovery in High-Dimensional Time Series",
  //   authors: "Jane Smith, Sarah Johnson, Yue Zhang",
  //   paperUrl: "https://arxiv.org/abs/2409.15476",
  //   codeUrl: "https://github.com/jsmith/scalable-causal-discovery",
  //   //bibtex: "https://arxiv.org/abs/2409.15476.bib",
  //   tldr: "Using causal discovery to find the causal structure of high-dimensional time series data.",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1561622539-dffbfc2008fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   award: "🏆 Best Paper Award",
  //   // if you have an image in public/images, you can use it like this:
  //   // imageUrl: "/images/publication-image.jpg"
  // },
    {
    year: "2024 (Conference)",
    conference: "ICCV",
    title: "DynFaceRestore: Balancing Fidelity and Quality in Diffusion-Guided Blind Face Restoration with Dynamic Blur-Level Mapping and Guidance",
    authors: "<strong>Huu-Phu Do</strong>, Yu-Wei Chen, Yi-Cheng Liao, Chi-Wei Hsiao, Han-Yang Wang, Wei-Chen Chiu, Ching-Chun Huang",
    paperUrl: "https://arxiv.org/abs/2507.13797",
    // codeUrl: "https://github.com/jsmith/scalable-causal-discovery",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    // tldr: "Using causal discovery to find the causal structure of high-dimensional time series data.",
    // imageUrl:
    //   "/images/DynFaceRestore.png",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
    award: "Highlight Paper",
  },
  {
    year: "2024 (Conference) ",
    conference: "MM",
    title: "TimeNeRF: Building Generalizable Neural Radiance Fields across Time from Few-Shot Input Views",
    authors: "Hsiang-Hui Hung, <strong>Huu-Phu Do</strong>, Yung-Hui Li, Ching-Chun Huang",
    paperUrl: "https://arxiv.org/pdf/2507.13929",
    // codeUrl: "https://github.com/jsmith/robust-causal-discovery",
    award: "Oral Paper",
  },
   {
    year: "2024 (Conference) ",
    conference: "ACCV",
    title: "Blind Super Resolution with Reference Images and Implicit Degradation Representation",
    authors: "<strong>Huu-Phu Do</strong>, Po-Chih Hu, Hao-Chien Hsueh, Che-Kai Liu, Vu-Hoang Tran, Ching-Chun Huang",
    paperUrl: "https://openaccess.thecvf.com/content/ACCV2024/html/Do_Blind_Super_Resolution_with_Reference_Images_and_Implicit_Degradation_Representation_ACCV_2024_paper.html",
    // codeUrl: "https://github.com/jsmith/robust-causal-discovery",

  },
   {
    year: "2024 (Conference) ",
    conference: "ICIP",
    title: "LIPFACE: LIPSCHITZ-CONDITIONED FOR RESOLUTION ROBUST FACE RECOGNITION",
    authors: "Yu Wei Chen, <strong>Huu-Phu Do</strong>, Chia Wei Kuo, Hsuan Tung Liu, Ching Chun Huang",
    paperUrl: "https://ieeexplore.ieee.org/abstract/document/10647914",
    // codeUrl: "https://github.com/jsmith/robust-causal-discovery",

  },
     {
    year: "2024 (Journal) ",
    conference: "Multimedia Systems",
    title: "Indirect: invertible and discrete noisy image rescaling with enhancement from case-dependent textures",
    authors: "<strong>Huu-Phu Do</strong>, Yan-An Chen, Nhat-Tuong Do-Tran, Kai-Lung Hua, Wen-Hsiao Peng, Ching-Chun Huang",
    paperUrl: "https://link.springer.com/article/10.1007/s00530-024-01272-5",
    // codeUrl: "https://github.com/jsmith/robust-causal-discovery",

  },
];
