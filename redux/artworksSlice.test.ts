import { artworkListItemFactory } from "../src/artworks/api/artworkListItemFactory";
import reducer, { loadArtworks, clearArtworks } from "./artworksSlice";

const artworks = artworkListItemFactory.buildList(7);
const monet = artworkListItemFactory.build({
  id: "monet",
  title: "The Water Lily Pond",
  artist_display: "Claude Monet",
});

describe("artworks reducer", () => {
  it("load artworks should work", () => {
    const previousState = {
      value: artworks,
    };
    const state = reducer(previousState, loadArtworks([monet]));
    expect(state.value).toEqual([...artworks, monet]);
  });
  it("clear artworks should work", () => {
    const previousState = {
      value: artworks,
    };
    const state = reducer(previousState, clearArtworks());
    expect(state.value).toEqual([]);
  });
});
