import React, { useRef, useState } from "react";
import { StyleSheet } from "react-native";
import { Button, Text, View } from "react-native";

const PageScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>page!</Text>
      <View
        style={{
          flexDirection: "row",
          height: 100,
          padding: 20,
        }}
      >
        <View style={{ backgroundColor: "blue", flex: 0.3 }} />
        <View style={{ backgroundColor: "red", flex: 0.5 }} />
      </View>
    </View>
  );
};

export default PageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center",
  },
});
