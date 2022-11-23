export interface ISearchResult {
  id: number;
  previewURL: string;
  details: IDetails;
}

export interface IDetails {
  user: string;
  tags: string;
  largeImageURL: string;
  imageWidth: number;
  imageHeight: number;
}