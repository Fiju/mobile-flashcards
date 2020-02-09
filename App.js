import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import DeckList from "./src/screens/DeckList";
import DeckDetails from "./src/screens/DeckDetails";
import MyStack from "./src/Navigator";
import { setLocalNotification } from "./src/notfication";

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }
  render() {
    return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
