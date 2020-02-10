import React, { useState } from "react";

import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { saveDeckTitle, getDecks } from "../lib/api";

export default function AddDeck(props) {
  const [title, setTitle] = useState("");
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Text style={styles.questionText}>
        What is the title of your new deck?
      </Text>
      <TextInput
        style={styles.textInput}
        placeholder="Title"
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <TouchableOpacity
        disabled={!title}
        style={styles.buttonStyle}
        onPress={
          title
            ? async () => {
                await saveDeckTitle(title);
                const decks = await getDecks();
                props.toggleView();
                props.navigate(decks[title]);
              }
            : () => {}
        }
      >
        <Text style={{ fontSize: 20 }}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => props.toggleView()}
      >
        <Text style={{ fontSize: 20 }}>Go back</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  questionText: {
    fontSize: 36,
    textAlign: "center"
  },
  textInput: {
    alignSelf: "stretch",
    height: 40,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "#000",
    marginTop: 20,
    marginBottom: 20,
    padding: 5
  },
  buttonStyle: {
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 40,
    paddingVertical: 15
  }
});
