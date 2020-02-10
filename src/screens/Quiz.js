import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import {
  TouchableWithoutFeedback,
  TouchableOpacity
} from "react-native-gesture-handler";
import { clearLocalNotification } from "../lib/notfication";

export default function(props) {
  const questions = props.route.params.deck.questions;
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answerView, toggleAnswerView] = useState(false);
  const [correctAnsers, setCorrectAnswers] = useState(0);

  return (
    <View style={styles.container}>
      {!(questions.length >= currentQuestion) ? (
        <View>
          <Text
            style={{
              fontSize: 40,
              fontWeight: "bold",
              justifyContent: "center",
              textAlign: "center"
            }}
          >
            {correctAnsers} correct answers out of {questions.length}
          </Text>
          <TouchableOpacity
            style={[styles.button, { borderWidth: 2 }]}
            onPress={() => {
              setCurrentQuestion(1);
              toggleAnswerView(false);
              setCorrectAnswers(0);
            }}
          >
            <Text style={{ fontSize: 25, textAlign: "center" }}>Retake</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { borderWidth: 2 }]}
            onPress={() => {
              clearLocalNotification();
              props.navigation.goBack();
            }}
          >
            <Text style={{ fontSize: 25, textAlign: "center" }}>Go Back</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <View style={styles.progress}>
            <Text style={{ fontSize: 25 }}>
              {currentQuestion} / {questions.length}
            </Text>
          </View>
          <View style={styles.question}>
            <View>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                  textAlign: "center"
                }}
              >
                {questions[currentQuestion - 1].question}
              </Text>
              {answerView ? (
                <Text
                  style={{
                    fontSize: 25,
                    marginVertical: 20,
                    textAlign: "center"
                  }}
                >
                  {questions[currentQuestion - 1].answer}
                </Text>
              ) : (
                <TouchableWithoutFeedback
                  onPress={() => toggleAnswerView(true)}
                >
                  <Text
                    style={{ fontSize: 20, color: "red", marginVertical: 20 }}
                  >
                    Show Answer
                  </Text>
                </TouchableWithoutFeedback>
              )}
            </View>
            <View>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: "green" }]}
                onPress={() => {
                  toggleAnswerView(false);
                  setCorrectAnswers(correctAnsers + 1);
                  setCurrentQuestion(currentQuestion + 1);
                }}
              >
                <Text style={{ fontSize: 25, color: "white" }}>Correct</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: "red" }]}
                onPress={() => {
                  toggleAnswerView(false);
                  setCurrentQuestion(currentQuestion + 1);
                }}
              >
                <Text style={{ fontSize: 25, color: "white" }}>Incorrect</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between"
  },
  progress: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 10
  },
  question: {
    flex: 9,
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    fontSize: 30,
    margin: 5
  }
});
