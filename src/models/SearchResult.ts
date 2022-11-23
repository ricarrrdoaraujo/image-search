export interface ISearchResult {
  id: number;
  webformatURL: string;
  webformatWidth: number;
  webformatHeight: number;
  details: IDetails;
}

export interface IDetails {
  user: string;
  tags: string;
  largeImageURL: string;
  imageWidth: number;
  imageHeight: number;
}