import { API_KEY, API_URL } from '../utils/constants';
import { News, NewsParameters } from '../interfaces';

type NewsResponse = {
  status: string;
  totalResults: number;
  articles: Array<News>;
};

export default class NewsApi {
  private url: string;

  constructor() {
    this.url = API_URL;
  }

  createQuery({ parameters }: { parameters: NewsParameters }): string {
    const keys = Object.keys(parameters);
    const newUrl = new URL(this.url);
    const { length } = keys;
    if (!length) {
      return '';
    }
    let value;
    keys.forEach((key) => {
      value = parameters[key as keyof NewsParameters];
      if (value) newUrl.searchParams.append(key, value.toString());
    });
    return newUrl.toString();
  }

  async request(options = {}): Promise<NewsResponse> {
    let requestQuery = this.url;
    if (Object.prototype.hasOwnProperty.call(options, 'parameters')) {
      requestQuery = this.createQuery(
        options as { parameters: NewsParameters },
      );
    }
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const response = await fetch(`${proxyUrl}${requestQuery}`, {
      ...options,
      headers: {
        Authorization: API_KEY,
      },
    });
    return response.json();
  }

  async getNews(options = {}): Promise<NewsResponse> {
    return this.request(options);
  }
}
