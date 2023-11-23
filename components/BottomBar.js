import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import IconIonicons from "react-native-vector-icons/Ionicons";

const BottomBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Icon name="home" size={24} color="#000" />
        <Text>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => {
          // Azione quando si preme il secondo link
          navigation.navigate("Page");
        }}
      >
        <IconIonicons name="settings-sharp" size={24} color="#000" />
        <Text>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 50,
    backgroundColor: "#fff",
    elevation: 4,
    position: "absolute", // Fissato in basso
    bottom: 0, // Alla fine dello schermo
    left: 0,
    right: 0,
  },
  tabButton: {
    alignItems: "center",
  },
});

export default BottomBar;
