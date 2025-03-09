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
    date: "11/2021 - Ongoing",
    title: "Senior Research Manager",
    company: "NVIDIA",
    manager: "Prof. Sanja Fidler",
  },
  {
    date: "3/2021 - 9/2021",
    title: "Research Scientist Intern",
    company: "NVIDIA Toronto AI Lab",
    manager: "Prof. Sanja Fidler",
  },
  {
    date: "1/2020 - 3/2020",
    title: "Research Intern",
    company: "Geometric Computation group – Stanford University",
    advisor: "Prof. Leonidas Guibas",
  },
];
