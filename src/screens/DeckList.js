import React from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  View,
  Text,
  Dimensions
} from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Deck 1",
    cardsCount: 5
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Deck 2",
    cardsCount: 5
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Deck 3",
    cardsCount: 5
  }
];

export default function DeckList(props) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() =>
              props.navigation.navigate("DeckDetails", {
                deck: item
              })
            }
          >
            <View style={styles.container}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subTitle}>{item.cardsCount} cards</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    width: Dimensions.get("window").width
  },
  title: {
    fontSize: 36,
    textAlign: "center"
  },
  subTitle: {
    fontSize: 20,
    textAlign: "center",
    color: "#a8a8a8",
    marginTop: 10
  },
  item: {
    backgroundColor: "white",
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    flex: 1
  }
});
