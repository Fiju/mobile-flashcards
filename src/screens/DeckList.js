import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  View,
  Text,
  Dimensions
} from "react-native";
import { getDecks } from "../api";

export default function DeckList(props) {
  const [decks, setDecks] = useState();
  useEffect(async () => {
    setDecks(await getDecks());
  }, []);

  const refreshList = async () => {
    setDecks(await getDecks());
  };

  return (
    <SafeAreaView style={styles.container}>
      {decks && (
        <FlatList
          data={Object.values(decks)}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() =>
                props.navigation.navigate("DeckDetails", {
                  deck: item,
                  refreshList
                })
              }
            >
              <View style={styles.container}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subTitle}>
                  {item.questions.length} cards
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.title}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    width: Dimensions.get("window").width
  },
  title: {
    fontSize: 36,
    textAlign: "center"
  },
  subTitle: {
    fontSize: 20,
    textAlign: "center",
    color: "#a8a8a8",
    marginTop: 10
  },
  item: {
    backgroundColor: "white",
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    flex: 1
  }
});
