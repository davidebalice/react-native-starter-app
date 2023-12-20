import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProductsMenu = () => {
  const [pressedButton, setPressedButton] = useState(null);
  const navigation = useNavigation();

  const handleButtonPressIn = (buttonName) => {
    setPressedButton(buttonName);
  };

  const handleButtonPressOut = () => {
    setPressedButton(null);
  };

  const isPressed = (buttonName) => {
    return buttonName === pressedButton;
  };

  const changeScreen = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          styles.infoButton,
          isPressed("info") && styles.buttonPressed,
        ]}
        onPress={() => changeScreen("Products")}
      >
        <Text style={styles.buttonText}>Card 1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.button,
          styles.dangerButton,
          isPressed("danger") && styles.buttonPressed,
        ]}
        onPress={() => changeScreen("Products2")}
      >
        <Text style={styles.buttonText}>Card 2</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.button,
          styles.warningButton,
          isPressed("warning") && styles.buttonPressed,
        ]}
        onPress={() => changeScreen("Products2")}
      >
        <Text style={styles.buttonText}>Card 3</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.button,
          styles.successButton,
          isPressed("success") && styles.buttonPressed,
        ]}
        onPress={() => changeScreen("Products2")}
      >
        <Text style={styles.buttonText}>Card 4</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f7f7f7",
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 46,
    borderRadius: 6,
    borderWidth: 0.2,
    borderColor: "#eee",
    borderBottomWidth: 4,
    marginVertical: 10,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 2,
  },
  infoButton: {
    backgroundColor: "#2196f3",
    borderColor: "#0e3860",
    shadowColor: "#1c5da6",
  },
  dangerButton: {
    backgroundColor: "#f44336",
    borderColor: "#c4211d",
    shadowColor: "#1c5da6",
  },
  warningButton: {
    backgroundColor: "#ff9800",
    borderColor: "#b87208",
    shadowColor: "#1c5da6",
  },
  successButton: {
    backgroundColor: "#4caf50",
    borderColor: "#2c6e3c",
    shadowColor: "#3aa245",
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
  buttonPressed: {
    transform: [{ translateY: 2 }],
    shadowOffset: { width: 0, height: 0 },
    borderBottomWidth: 0,
  },
});

export default ProductsMenu;
