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
  name: "Zan Gojcic",
  title: "Senior Research Manager",
  institution: "NVIDIA",
  // Note that links work in the description
  description:
    "I'm a Senior Research Manager at NVIDIA in Zurich, leading a team focused on advancing neural reconstruction and generative world simulation for PhysicalAI. Our mission is to develop high-fidelity simulation environments that enable autonomous agents to be trained and evaluated in closed-loop systems.",
  email: "zan.gojcic@gmail.com",
  imageUrl: "/assets/zg.jpeg",
  googleScholarUrl: "https://scholar.google.com/citations?user=8KsqL4gAAAAJ&hl=en",
  githubUsername: "zgojcic",
  twitterUsername: "ZGojcic",
};
