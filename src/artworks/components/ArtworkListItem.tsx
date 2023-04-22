import React from "react";
import { IArtworkListItem } from "../api/IArtworkListItem";
import { List } from "react-native-paper";

interface IArtworkListItemProps {
  artwork: IArtworkListItem;
  onPress: () => void;
}

export const ArtworkListItem = ({
  artwork,
  onPress,
}: IArtworkListItemProps): React.ReactElement => {
  return (
    <List.Item
      left={(props) => (
        <List.Image
          {...props}
          source={{
            uri: `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`,
          }}
        />
      )}
      title={artwork.title}
      description={artwork.artist_display}
      onPress={onPress}
    />
  );
};
