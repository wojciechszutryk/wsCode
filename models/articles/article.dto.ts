export interface CreateArticleDto {
  title: string;
  description: string;
  body?: string;
  authorId: number;
}
