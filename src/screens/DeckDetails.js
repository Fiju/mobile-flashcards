import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { getDeck } from "../lib/api";
import Button from "../components/Button";

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
        <Button
          onPress={() =>
            props.navigation.navigate("AddCard", {
              deckKey: deck.title,
              update: onCardAdd
            })
          }
          label="Add card"
          buttonType="medium"
        />
        <Button
          onPress={() =>
            props.navigation.navigate("Quiz", {
              deck
            })
          }
          label="Start Quiz"
          buttonType="medium"
        />
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
  }
});
