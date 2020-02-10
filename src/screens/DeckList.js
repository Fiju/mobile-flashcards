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
import { getDecks } from "../lib/api";
import AddDeck from "./AddDeck";
import Button from "../components/Button";

export default function DeckList(props) {
  const [view, toggleView] = useState(true);
  const [decks, setDecks] = useState();
  useEffect(() => {
    async function fetchData() {
      setDecks(await getDecks());
    }
    fetchData();
  }, []);

  const refreshList = async () => {
    setDecks(await getDecks());
  };

  return (
    <SafeAreaView style={styles.container}>
      {view ? (
        <>
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
          <Button
            onPress={() => toggleView(!view)}
            label="Add new deck"
            buttonType="large"
          />
        </>
      ) : (
        <AddDeck
          toggleView={() => toggleView(!view)}
          navigate={deck =>
            props.navigation.navigate("DeckDetails", {
              deck,
              refreshList
            })
          }
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
  },
  smallText: {
    fontSize: 30
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 5,
    fontSize: 30,
    margin: 5
  }
});
