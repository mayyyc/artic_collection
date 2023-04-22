import { Text } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../RootStack";
import { useAppSelector } from "../../../redux/hooks";
import { ArtworkDetails } from "../components/ArtworkDetails";

type Props = StackScreenProps<RootStackParamList, "Artwork">;

export const ArtworkScreen = ({ navigation, route }: Props) => {
  const artworks = useAppSelector((state) => state.artworks.value);
  const artwork = artworks.find(
    (artwork) => artwork.id === route.params.artworkId
  );
  return <ArtworkDetails artwork={artwork} />;
};
