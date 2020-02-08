import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DeckList from "./screens/DeckList";
import DeckDetails from "./screens/DeckDetails";
import AddDeck from "./screens/AddDeck";

const Stack = createStackNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator initialRouteName="DeckList">
      <Stack.Screen name="DeckList" component={DeckList} />
      <Stack.Screen name="DeckDetails" component={DeckDetails} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function MyStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="AddDeck" component={AddDeck} />
    </Tab.Navigator>
  );
}
