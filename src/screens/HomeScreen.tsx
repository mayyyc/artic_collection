import { Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Counter from "../components/Counter";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../RootStack";

type Props = StackScreenProps<RootStackParamList, "Home">;

export const HomeScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text>No</Text>
      <Counter />
      <StatusBar style="auto" />
      <Button
        title="Go to Artwork"
        onPress={() => navigation.navigate("Artwork", { artworkId: "xxx" })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
