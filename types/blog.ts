export interface Blog {
  slug: string;

  featured: boolean;

  category: string;

  title: string;

  seoTitle: string;

  seoDescription: string;

  excerpt: string;

  image: string;

  author: string;

  publishedDate: string;

  readTime: string;

  tags: string[];

  content: string;
  faq?: {

    question: string;

    answer: string;

  }[];
}