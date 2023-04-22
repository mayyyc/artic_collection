export interface IArtworkListItem {
  id: string;
  title: string;
  thumbnail: {
    lqip: string;
    width: number;
    height: number;
    alt_text: string;
  };
  date_display: string;
  artist_display: string;
}
