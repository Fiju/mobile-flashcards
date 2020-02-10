import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { getDeck } from "../lib/api";

export default function DeckDetails(props) {
  const [deck, updateDeck] = useState(props.route.params.deck);

  useEffect(() => {
    props.route.params.refreshList();
  }, []);

  const onCardAdd = () => {
    props.route.params.refreshList();
    getDeck(deck.title).then(updatedDeck => updateDeck(updatedDeck));
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.largeText}>{deck.title}</Text>
        <Text style={styles.smallText}>{deck.questions.length} cards</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate("AddCard", {
              deckKey: deck.title,
              update: onCardAdd
            })
          }
          style={styles.button}
        >
          <Text style={styles.smallText}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonInverse}
          onPress={() =>
            props.navigation.navigate("Quiz", {
              deck
            })
          }
        >
          <Text style={[styles.smallText, { color: "#FFF" }]}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    width: Dimensions.get("window").width
  },
  largeText: {
    fontSize: 40
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
  },
  buttonInverse: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 5,
    fontSize: 30,
    backgroundColor: "#000",
    margin: 5
  }
});
