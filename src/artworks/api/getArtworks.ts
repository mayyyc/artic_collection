import axios, { AxiosResponse } from "axios";
import { IArtworkListItem } from "./IArtworkListItem";

export const getArtworks = async (
  page: number
): Promise<IArtworkListItem[]> => {
  try {
    const { data } = await axios.get<AxiosResponse<IArtworkListItem[]>>(
      `https://api.artic.edu/api/v1/artworks?limit=10&page=${page}&fields=id,title,thumbnail,date_display,artist_display,place_of_origin,dimensions,artwork_type_title`
    );
    return data.data;
  } catch (error) {
    throw error;
  }
};