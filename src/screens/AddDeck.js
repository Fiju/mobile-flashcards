import React, { useState } from "react";

import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { saveDeckTitle } from "../api";

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
      <TouchableOpacity disabled={!title} style={styles.buttonStyle}>
        <Text
          style={{ fontSize: 20 }}
          onPress={title ? () => saveDeckTitle(title) : () => {}}
        >
          Submit
        </Text>
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
