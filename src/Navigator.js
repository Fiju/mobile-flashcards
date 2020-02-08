import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DeckList from "./screens/DeckList";
import DeckDetails from "./screens/DeckDetails";

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator initialRouteName="DeckList">
      <Stack.Screen name="DeckList" component={DeckList} />
      <Stack.Screen name="DeckDetails" component={DeckDetails} />
    </Stack.Navigator>
  );
}
