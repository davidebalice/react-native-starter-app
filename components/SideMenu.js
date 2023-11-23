import React, { useRef, useState } from "react";
import { StyleSheet } from "react-native";
import { Button, Text, View, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import img from "../assets/img/image.jpg";

const SideMenu = ({ navigation, closeDrawer }) => {
  const changeScreen = (screen) => {
    navigation.navigate(screen);
    closeDrawer();
  };

  return (
    <View style={[styles.container, styles.navigationContainer]}>
      <Image source={img} style={styles.image} />

      <TouchableOpacity
        style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
        onPress={() => changeScreen("Home")}
      >
        <Icon name="home" size={20} color="#111" />
        <Text style={{ marginLeft: 20 }}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
        onPress={() => changeScreen("Page")}
      >
        <Icon name="star" size={20} color="#111" />
        <Text style={{ marginLeft: 20,color:'#111' }}>Page</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SideMenu;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    padding: 0,
  },
  navigationContainer: {
    backgroundColor: "#ecf0f1",
  },
  paragraph: {
    padding: 14,
    fontSize: 15,
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "auto",
    aspectRatio: 1.5,
    resizeMode: "cover",
  },
});
