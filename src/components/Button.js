import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import Label from "./Label";

export default ({ disabled, onPress, label, buttonType }) => (
  <TouchableOpacity disabled={disabled} onPress={onPress} style={styles.button}>
    <Label label={label} size={buttonType} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 5,
    fontSize: 30,
    margin: 5
  }
});
