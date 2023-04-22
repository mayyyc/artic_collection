import React from "react";
import { render, fireEvent, screen } from "@testing-library/react-native";
import { ArtworkListItem } from "./ArtworkListItem";
import { artworkListItemFactory } from "../api/artworkListItemFactory";

const monet = artworkListItemFactory.build({
  id: "monet",
  title: "The Water Lily Pond",
  artist_display: "Claude Monet",
});

describe("ArtworkListItem", () => {
  it("should render item", () => {
    const onPress = jest.fn();
    render(<ArtworkListItem artwork={monet} onPress={onPress} />);
    expect(screen.getByText("The Water Lily Pond")).toBeTruthy();
  });
  it("should call onPress when click", () => {
    const onPress = jest.fn();
    render(<ArtworkListItem artwork={monet} onPress={onPress} />);
    fireEvent.press(screen.getByText("The Water Lily Pond"));
    expect(onPress).toBeCalledTimes(1);
  });
});
