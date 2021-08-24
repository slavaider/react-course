/*
apiKey - Your API key. Alternatively you can provide this via the X-Api-Key HTTP header.

q - Keywords or phrases to search for in the article title and body.

qInTitle - Keywords or phrases to search for in the article title only.

sources - A comma-seperated string of identifiers (maximum 20) for the news sources or blogs you want headlines from. Use the /sources endpoint to locate these programmatically or look at the sources index.

domains - A comma-seperated string of domains (eg bbc.co.uk, techcrunch.com, engadget.com) to restrict the search to.

excludeDomains - A comma-seperated string of domains (eg bbc.co.uk, techcrunch.com, engadget.com) to remove from the results.

from - A date and optional time for the oldest article allowed. This should be in ISO 8601 format (e.g. 2021-08-01 or 2021-08-01T11:48:02)

to - A date and optional time for the newest article allowed. This should be in ISO 8601 format (e.g. 2021-08-01 or 2021-08-01T11:48:02)

language - The 2-letter ISO-639-1 code of the language you want to get headlines for. Possible options: ru,en etc.

sortBy - The order to sort the articles in. Possible options: relevancy, popularity, publishedAt.
relevancy = articles more closely related to q come first.
popularity = articles from popular sources and publishers come first.
publishedAt = newest articles come first.
Default: publishedAt

pageSize - The number of results to return per page.
Default: 100. Maximum: 100.

page - Use this to page through the results.
Default: 1.
 */

export default interface NewsParameters {
  apiKey: string;
  q?: string;
  qInTitle?: string;
  sources?: string;
  domains?: string;
  excludeDomains?: string;
  from?: string;
  to?: string;
  language?: string;
  sortBy?: string;
  pageSize?: number;
  page?: number;
}
