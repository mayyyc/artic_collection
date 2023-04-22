import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import { ArtworkList } from "./ArtworkList";
import { artworkListItemFactory } from "../api/artworkListItemFactory";

const artworks = artworkListItemFactory.buildList(7);
const monet = artworkListItemFactory.build({
  id: "monet",
  title: "The Water Lily Pond",
  artist_display: "Claude Monet",
});

describe("ArtworkList", () => {
  it("should render children", () => {
    const onPressArtwork = jest.fn();
    render(<ArtworkList artworks={artworks} onPressArtwork={onPressArtwork} />);
    const artworkItems = screen.getAllByTestId("artwork-list-item");
    expect(artworkItems.length).toBe(7);
  });
  it("should call onPress when click", () => {
    const onPressArtwork = jest.fn();
    render(
      <ArtworkList
        artworks={[...artworks, monet]}
        onPressArtwork={onPressArtwork}
      />
    );
    fireEvent.press(screen.getByText("The Water Lily Pond"));
    expect(onPressArtwork).toBeCalledWith("monet");
  });
});
