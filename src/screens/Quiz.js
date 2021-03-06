import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import {
  TouchableWithoutFeedback,
  TouchableOpacity
} from "react-native-gesture-handler";
import { clearLocalNotification } from "../lib/notfication";
import Button from "../components/Button";
import Label from "../components/Label";

export default function(props) {
  const questions = props.route.params.deck.questions;
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answerView, toggleAnswerView] = useState(false);
  const [correctAnsers, setCorrectAnswers] = useState(0);

  return questions.length ? (
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
          <Button
            onPress={() => {
              setCurrentQuestion(1);
              toggleAnswerView(false);
              setCorrectAnswers(0);
            }}
            label="Retake"
          />
          <Button
            onPress={() => {
              clearLocalNotification();
              props.navigation.goBack();
            }}
            label="Go back"
          />
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
              <Button
                onPress={() => {
                  toggleAnswerView(false);
                  setCorrectAnswers(correctAnsers + 1);
                  setCurrentQuestion(currentQuestion + 1);
                }}
                label="Correct"
                buttonType="small"
              />
              <Button
                onPress={() => {
                  toggleAnswerView(false);
                  setCurrentQuestion(currentQuestion + 1);
                }}
                label="Incorrect"
                buttonType="small"
              />
            </View>
          </View>
        </>
      )}
    </View>
  ) : (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Label label="There is no card added to this deck yet" size="large" />
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
  }
});
