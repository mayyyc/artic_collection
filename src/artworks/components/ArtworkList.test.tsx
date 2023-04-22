import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import { ArtworkList } from "./ArtworkList";

describe("ArtworkList", () => {
  it("should render children", () => {
    const onPressArtwork = jest.fn();
    render(<ArtworkList artworks={[]} onPressArtwork={onPressArtwork} />);
    expect(screen.getByText("Yes")).toBeTruthy();
  });
});
