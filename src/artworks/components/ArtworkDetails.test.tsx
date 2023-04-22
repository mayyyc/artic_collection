import React from "react";
import { render, screen } from "@testing-library/react-native";
import { ArtworkDetails } from "./ArtworkDetails";
import { artworkListItemFactory } from "../api/artworkListItemFactory";

const monet = artworkListItemFactory.build({
  id: "monet",
  title: "The Water Lily Pond",
  artist_display: "Claude Monet",
  date_display: "1899",
  place_of_origin: "France",
  dimensions: "93 cm x 74 cm",
  artwork_type_title: "Oil Paint",
});

describe("ArtworkDetails", () => {
  it("should show artwork details", () => {
    render(<ArtworkDetails artwork={monet} />);
    expect(screen.getByText("The Water Lily Pond")).toBeTruthy();
    expect(screen.getByText("Claude Monet")).toBeTruthy();
    expect(screen.getByText("1899 - France")).toBeTruthy();
    expect(screen.getByText("Type: Oil Paint")).toBeTruthy();
    expect(screen.getByText("Dimensions: 93 cm x 74 cm")).toBeTruthy();
  });
  it("should shoe artwork not found", () => {
    render(<ArtworkDetails artwork={undefined} />);
    expect(screen.getByText("Artwork not found :(")).toBeTruthy();
  });
});
