import React, { useRef, useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Text, View, Image, TouchableOpacity } from "react-native";
import Spacer from "../components/Spacer";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/Entypo";
import img from "../assets/img/image.jpg";

const SideMenu = ({ navigation, closeDrawer }) => {
  const changeScreen = (screen) => {
    navigation.navigate(screen);
    closeDrawer();
  };

  return (
    <View style={[styles.container, styles.navigationContainer]}>
      <Image source={img} style={styles.image} />
      <ScrollView>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
          onPress={() => changeScreen("Home")}
        >
          <Icon name="home" size={20} color="#111" />
          <Text style={{ marginLeft: 20 }}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
          onPress={() => changeScreen("TextPage")}
        >
          <Icon2 name="text" size={20} color="#111" />
          <Text style={{ marginLeft: 20, color: "#111" }}>Text page</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
          onPress={() => changeScreen("Gallery")}
        >
          <Icon name="photo" size={20} color="#111" />
          <Text style={{ marginLeft: 20, color: "#111" }}>Gallery</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
          onPress={() => changeScreen("Products")}
        >
          <Icon2 name="text" size={20} color="#111" />
          <Text style={{ marginLeft: 20, color: "#111" }}>Products</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
          onPress={() => changeScreen("Form")}
        >
          <Icon2 name="text" size={20} color="#111" />
          <Text style={{ marginLeft: 20, color: "#111" }}>Form</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
          onPress={() => changeScreen("Map")}
        >
          <Icon2 name="text" size={20} color="#111" />
          <Text style={{ marginLeft: 20, color: "#111" }}>Map</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
          onPress={() => changeScreen("Chat")}
        >
          <Icon2 name="text" size={20} color="#111" />
          <Text style={{ marginLeft: 20, color: "#111" }}>Chat</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
          onPress={() => changeScreen("Menu")}
        >
          <Icon2 name="text" size={20} color="#111" />
          <Text style={{ marginLeft: 20, color: "#111" }}>Menu</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
          onPress={() => changeScreen("Login")}
        >
          <Icon2 name="text" size={20} color="#111" />
          <Text style={{ marginLeft: 20, color: "#111" }}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
          onPress={() => changeScreen("ProtectedPage")}
        >
          <Icon2 name="text" size={20} color="#111" />
          <Text style={{ marginLeft: 20, color: "#111" }}>Protected page</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
          onPress={() => changeScreen("Theme")}
        >
          <Icon2 name="text" size={20} color="#111" />
          <Text style={{ marginLeft: 20, color: "#111" }}>Theme settings</Text>
        </TouchableOpacity>

     

        <Spacer height={200} />
      </ScrollView>
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
