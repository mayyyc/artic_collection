import { Text } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../RootStack";

type Props = StackScreenProps<RootStackParamList, "Artwork">;

export const ArtworkScreen = ({ navigation, route }: Props) => {
  return <Text>This is artwork {route.params.artworkId}</Text>;
};
