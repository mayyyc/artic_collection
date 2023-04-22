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
  place_of_origin: string;
  dimensions: string;
  artwork_type_title: string;
}
