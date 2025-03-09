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
    year: "2017—2021",
    institution: "ETH Zurich",
    degree: "Ph.D. in 3D Computer Vision",
    advisor: "Prof. Andreas Wieser",
  },
  {
    year: "2013—2016",
    institution: "TU Graz",
    degree: "MSc. S. in Geomatics Science",
  },
  {
    year: "2010—2013",
    institution: "Univeristy of Ljubljana",
    degree: "BSc. S. in Geoinformation",
  },
];
