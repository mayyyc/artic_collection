import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { IArtworkListItem } from "../src/artworks/api/IArtworkListItem";

// Define a type for the slice state
interface ArtworksState {
  value: IArtworkListItem[];
}

// Define the initial state using that type
const initialState: ArtworksState = {
  value: [],
};

export const artworksSlice = createSlice({
  name: "artworks",
  initialState,
  reducers: {
    loadArtworks: (state, action: PayloadAction<IArtworkListItem[]>) => {
      state.value = state.value.concat(action.payload);
    },
    clearArtworks: (state) => {
      state.value = [];
    },
  },
});

export const { loadArtworks, clearArtworks } = artworksSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectArtworks = (state: RootState) => state.artworks.value;

export default artworksSlice.reducer;
