import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CollectionScreen } from "./src/artworks/screens/CollectionScreen";
import { ArtworkScreen } from "./src/artworks/screens/ArtworkScreen";

export type RootStackParamList = {
  Collection: undefined;
  Artwork: { artworkId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Collection" component={CollectionScreen} />
        <Stack.Screen name="Artwork" component={ArtworkScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
