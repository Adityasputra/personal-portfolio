export interface Blog {
  id: number;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  image: string | null;
  content: string;
}
