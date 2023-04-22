import {
  FlatList,
  RefreshControl,
  View,
  ActivityIndicator,
} from "react-native";
import { Text } from "react-native-paper";
import React from "react";
import { IArtworkListItem } from "../api/IArtworkListItem";
import { ArtworkListItem } from "./ArtworkListItem";

interface IArtworkListProps {
  artworks: IArtworkListItem[];
  onPressArtwork: (artworkId: string) => void;
  onLoadMore?: () => void;
  onRefresh?: () => void;
  refreshing?: boolean;
  isLoadingMore?: boolean;
}

export const ArtworkList = ({
  artworks,
  onPressArtwork,
  onLoadMore,
  onRefresh,
  refreshing,
  isLoadingMore,
}: IArtworkListProps): React.ReactElement => {
  return (
    <FlatList
      refreshControl={
        <RefreshControl
          onRefresh={onRefresh}
          refreshing={refreshing || false}
        />
      }
      ListFooterComponent={
        isLoadingMore ? (
          <View
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <ActivityIndicator
              style={{ marginRight: 4 }}
              size="small"
              animating={true}
            />
            <Text variant="bodySmall">Loading More...</Text>
          </View>
        ) : null
      }
      onEndReached={onLoadMore}
      onEndReachedThreshold={0.01}
      data={artworks}
      keyExtractor={(item) => "item_" + item.id}
      renderItem={({ item }) => (
        <ArtworkListItem
          artwork={item}
          onPress={() => onPressArtwork(item.id)}
        />
      )}
    />
  );
};
