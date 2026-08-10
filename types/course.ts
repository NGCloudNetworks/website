export interface CourseFAQ {
  question: string;
  answer: string;
}

export interface CurriculumWeek {
  week: string;
  timeline: string;
  module: string;
  description: string;
  practicalLabs: string[];
  tools: string[];
  topics: string[];
}

export interface SalaryBand {
  experience: string;
  salary: string;
}

export interface CareerStage {
  stage: string;
  role: string;
  salary: string;
}

export interface SeoContentSection {
  heading: string;
  paragraphs: string[];
}

export interface CourseCTA {
  title: string;
  description: string;
  primaryButton: string;
  primaryLink: string;
  secondaryButton: string;
  secondaryLink: string;
  benefits: {
    title: string;
    description: string;
  }[];
}

export interface Course {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  excerpt: string;
  image: string;

  // Broad nav/homepage grouping — keep in sync with data/courseLinks.ts
  navCategory: "Networking" | "Cloud" | "Security";

  // Specific display category shown on the course page itself
  category:
    | "Networking"
    | "Cloud Computing"
    | "Cyber Security"
    | "Advanced Networking"
    | "Enterprise Networking"
    | "Network Security"
    | "Infrastructure";

  duration: string;
  price: string;
  priceCurrency: string;
  priceDescription: string;
  includedFeatures: string[];
  pricingFaqs: CourseFAQ[];

  tools: string[];

  whyLearn: {
    title: string;
    description: string;
    points: string[];
  };

  skills: string[];
  skillsOverview: string;
  labs: string[];
  projects: string[];
  curriculum: CurriculumWeek[];
  salaries: SalaryBand[];
  jobRoles: string[];
  careerPath: CareerStage[];
  outcomes: string[];
  relatedCourses: string[];
  relatedBlogs: string[];
  tags: string[];
  faqs: CourseFAQ[];

  seoContent: {
    introduction: string;
    sections: SeoContentSection[];
    conclusion: string;
  };

  cta: CourseCTA;
}