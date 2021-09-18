import News from './news';

export default interface NewsResponse {
  status: string;
  totalResults: number;
  articles: Array<News>;
}
