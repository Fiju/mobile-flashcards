import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DeckList from "./screens/DeckList";
import DeckDetails from "./screens/DeckDetails";
import AddCard from "./screens/AddCard";
import Quiz from "./screens/Quiz";

const Stack = createStackNavigator();

export default function HomeStackScreen() {
  return (
    <Stack.Navigator initialRouteName="DeckList">
      <Stack.Screen name="DeckList" component={DeckList} />
      <Stack.Screen name="DeckDetails" component={DeckDetails} />
      <Stack.Screen name="AddCard" component={AddCard} />
      <Stack.Screen name="Quiz" component={Quiz} />
    </Stack.Navigator>
  );
}
