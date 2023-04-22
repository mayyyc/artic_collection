import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/screens/HomeScreen";
import { ArtworkScreen } from "./src/screens/ArtworkScreen";

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
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Artwork" component={ArtworkScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
