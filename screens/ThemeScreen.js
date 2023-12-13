import React, { useRef, useState, useContext } from "react";
import { StyleSheet } from "react-native";
import Spacer from "../components/Spacer";
import ThemeContext from "../context/themeContext";
import {
  Button,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";

const ThemeScreen = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ backgroundColor: theme.colors.background }}>
          <Text style={{ color: theme.colors.text }}>
            Testo con il colore del tema
          </Text>
          <Button title="Cambia tema" onPress={toggleTheme} />
        </View>
      </View>
    </ScrollView>
  );
};

export default ThemeScreen;

const styles = StyleSheet.create({
  fullscreenPhoto: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "start",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  singleText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "justify",
  },
  columnsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  column: {
    flex: 1,
    alignItems: "center",
  },
  columnText: {
    fontSize: 15,
    marginBottom: 10,
    textAlign: "justify",
  },
  spacer: {
    width: 20,
  },
  imagesContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 20,
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: 170,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  image2: {
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  modalImage: {
    width: 450,
    height: 450,
    borderRadius: 0,
    marginBottom: 10,
  },
});
