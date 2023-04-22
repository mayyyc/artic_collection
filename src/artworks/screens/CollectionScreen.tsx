import { SafeAreaView, StatusBar, Text, View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../RootStack";
import { useQuery } from "@tanstack/react-query";
import { getArtworks } from "../api/getArtworks";
import { useState } from "react";
import { loadArtworks } from "../../../redux/artworksSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { ActivityIndicator, useTheme } from "react-native-paper";
import { ArtworkList } from "../components/ArtworkList";

type Props = StackScreenProps<RootStackParamList, "Collection">;

export const CollectionScreen = ({ navigation }: Props) => {
  const theme = useTheme();
  const artworks = useAppSelector((state) => state.artworks.value);
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const { isLoading, isError } = useQuery({
    queryKey: ["getArtworks"],
    queryFn: () => getArtworks(page),
    onSuccess: (data) => {
      dispatch(loadArtworks(data));
    },
  });

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: StatusBar.currentHeight,
      }}
    >
      {isLoading && (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ActivityIndicator size="large" animating={true} />
        </View>
      )}
      {isError && (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: theme.colors.error }}>
            Something went wrong :(
          </Text>
        </View>
      )}
      {!isLoading && !isError && artworks.length > 0 && (
        <ArtworkList
          artworks={artworks}
          onPressArtwork={(artworkId) =>
            navigation.navigate("Artwork", { artworkId })
          }
        />
      )}
    </SafeAreaView>
  );
};
