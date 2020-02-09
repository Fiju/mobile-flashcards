import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView
} from "react-native";
import { addCardToDeck } from "../api";

export default function AddCard(props) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const questionHandler = question => {
    setQuestion(question);
  };

  const answerHandler = answer => {
    setAnswer(answer);
  };

  const submit = () => {
    const { deckKey, update } = props.route.params;

    addCardToDeck(deckKey, { question, answer }).then(() => update());

    goBack();
  };

  const goBack = () => {
    props.navigation.goBack();
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Question"
        onChangeText={text => questionHandler(text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Answer"
        onChangeText={text => answerHandler(text)}
      />

      <View style={{ flex: 0.5, alignItems: "center" }}>
        <TouchableOpacity
          disabled={!(question.length && answer.length)}
          onPress={() => submit()}
          style={styles.button}
        >
          <Text style={styles.smallText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  textInput: {
    alignSelf: "stretch",
    height: 40,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "#000",
    marginBottom: 20,
    padding: 5
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
  smallText: {
    fontSize: 30
  }
});
