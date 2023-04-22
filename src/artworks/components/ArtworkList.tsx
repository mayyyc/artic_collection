import { Button, FlatList, Text } from "react-native";
import React from "react";
import { IArtworkListItem } from "../api/IArtworkListItem";
import { List } from "react-native-paper";
import { ArtworkListItem } from "./ArtworkListItem";

interface IArtworkListProps {
  artworks: IArtworkListItem[];
  onPressArtwork: (artworkId: string) => void;
}

export const ArtworkList = ({
  artworks,
  onPressArtwork,
}: IArtworkListProps): React.ReactElement => {
  return (
    <FlatList
      data={artworks}
      renderItem={({ item }) => (
        <ArtworkListItem
          key={item.id}
          artwork={item}
          onPress={() => onPressArtwork(item.id)}
        />
      )}
    />
  );
};
