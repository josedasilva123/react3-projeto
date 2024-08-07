export interface IPost {
  id: number;
  categoryId?: number;
  title: string;
  excerpt?: string;
  content: string;
  image?: string;
}
