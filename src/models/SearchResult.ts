export interface ISearchResult {
  id: number;
  webformatURL: string;
  webformatWidth: number;
  webformatHeight: number;
  user: string;
  tags: string;
  largeImageURL: string;
  imageWidth: number;
  imageHeight: number;
}

export interface IDetails {
  user: string;
  tags: string;
  largeImageURL: string;
  imageWidth: number;
  imageHeight: number;
}