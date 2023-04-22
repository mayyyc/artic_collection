import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/artworks/screens/HomeScreen";
import { ArtworkScreen } from "./src/artworks/screens/ArtworkScreen";

export type RootStackParamList = {
  Home: undefined;
  Artwork: { artworkId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Collection" }}
        />
        <Stack.Screen name="Artwork" component={ArtworkScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
