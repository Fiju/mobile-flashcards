import React from "react";
import { Text, StyleSheet } from "react-native";
import { RFValue } from "../lib/responsiveFont";

export default ({ label, size }) => <Text style={styles[size]}>{label}</Text>;

const styles = StyleSheet.create({
  small: {
    fontSize: RFValue(15),
    textAlign: "center"
  },
  medium: {
    fontSize: RFValue(17),
    textAlign: "center"
  },
  large: {
    fontSize: RFValue(20),
    textAlign: "center"
  }
});
