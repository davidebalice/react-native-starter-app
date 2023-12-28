import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProductsMenu = ({ selected }) => {
  const [pressedButton, setPressedButton] = useState(null);
  const navigation = useNavigation();

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
          selected === 1 && styles.selectedButton,
          isPressed("info") && styles.buttonPressed,
        ]}
        onPress={() => changeScreen("Products")}
      >
        <Text style={styles.buttonText}>Card 1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.button,
          styles.infoButton,
          selected === 2 && styles.selectedButton,
          isPressed("danger") && styles.buttonPressed,
        ]}
        onPress={() => changeScreen("Products2")}
      >
        <Text style={styles.buttonText}>Card 2</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.button,
          styles.infoButton,
          selected === 3 && styles.selectedButton,
          isPressed("warning") && styles.buttonPressed,
        ]}
        onPress={() => changeScreen("Products3")}
      >
        <Text style={styles.buttonText}>Card 3</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.button,
          styles.infoButton,
          selected === 4 && styles.selectedButton,
          isPressed("success") && styles.buttonPressed,
        ]}
        onPress={() => changeScreen("Products4")}
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
    width: 97,
    height: 40,
    borderRadius: 0,
    borderWidth: 0.3,
    borderColor: "#eee",
    borderBottomWidth: 2,
    marginVertical: 10,
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 1,
    backgroundColor: "#2196f3",
    borderColor: "#0e3860",
    shadowColor: "#1c5da6",
  },
  selectedButton: {
    backgroundColor: "#1175c4",
    borderColor: "#0e3860",
    shadowColor: "#1c5da6",
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
