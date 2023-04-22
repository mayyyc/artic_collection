import { Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Counter from "../components/Counter";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../RootStack";
import { useQuery } from "@tanstack/react-query";
import { getArtworks } from "../api/getArtworks";
import { useState } from "react";

type Props = StackScreenProps<RootStackParamList, "Collection">;

export const CollectionScreen = ({ navigation }: Props) => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["getArtworks"],
    queryFn: () => getArtworks(page),
    onSuccess: (data) => {},
  });
  return (
    <View style={styles.container}>
      <Text>{isLoading && "Loading"}</Text>
      {data?.map((each) => (
        <Text
          key={each.id}
          onPress={() => navigation.navigate("Artwork", { artworkId: each.id })}
        >
          {each.title}
        </Text>
      ))}
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
