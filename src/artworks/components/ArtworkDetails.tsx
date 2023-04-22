import React from "react";
import { IArtworkListItem } from "../api/IArtworkListItem";
import { Image, View } from "react-native";
import { Text } from "react-native-paper";

interface IArtworkDetailsProps {
  artwork: IArtworkListItem | undefined;
}

export const ArtworkDetails = ({
  artwork,
}: IArtworkDetailsProps): React.ReactElement => {
  if (!artwork)
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Artwork not found :(</Text>
      </View>
    );
  return (
    <View style={{ padding: 16 }}>
      <Image
        style={{ width: "100%", height: 500, marginBottom: 16 }}
        source={{
          uri: `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`,
        }}
      />
      <Text
        style={{ textAlign: "center", marginBottom: 8 }}
        variant="headlineMedium"
      >
        {artwork.title}
      </Text>
      <Text
        style={{ textAlign: "center", marginBottom: 8 }}
        variant="bodyLarge"
      >
        {artwork.artist_display}
      </Text>
      <Text style={{ textAlign: "center" }} variant="bodySmall">
        {artwork.date_display} - {artwork.place_of_origin}
      </Text>
      <Text style={{ textAlign: "center" }} variant="bodySmall">
        Type: {artwork.artwork_type_title}
      </Text>
      <Text style={{ textAlign: "center" }} variant="bodySmall">
        Dimensions: {artwork.dimensions}
      </Text>
    </View>
  );
};
