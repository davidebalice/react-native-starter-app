import React, { useRef, useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Text, View, Image, TouchableOpacity } from "react-native";
import Spacer from "../components/Spacer";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/Entypo";
import Icon3 from "react-native-vector-icons/AntDesign";
import Icon4 from "react-native-vector-icons/Feather";
import Icon5 from "react-native-vector-icons/Ionicons";
import Icon6 from "react-native-vector-icons/MaterialCommunityIcons";

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
          style={styles.menuButton}
          onPress={() => changeScreen("Home")}
        >
          <View style={styles.iconContainer}>
            <Icon name="home" size={20} color="#111" />
          </View>
          <Text style={{ marginLeft: 20 }}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => changeScreen("TextPage")}
        >
          <View style={styles.iconContainer}>
            <Icon2 name="text" size={23} color="#111" />
          </View>
          <Text style={styles.text}>Text page</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => changeScreen("Gallery")}
        >
          <View style={styles.iconContainer}>
            <Icon name="photo" size={20} color="#111" />
          </View>
          <Text style={styles.text}>Gallery</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => changeScreen("Products")}
        >
          <View style={styles.iconContainer}>
            <Icon2 name="shopping-cart" size={20} color="#111" />
          </View>
          <Text style={styles.text}>Products</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => changeScreen("Menu")}
        >
          <View style={styles.iconContainer}>
            <Icon4 name="align-justify" size={24} color="#111" />
          </View>
          <Text style={styles.text}>Menu</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => changeScreen("Form")}
        >
          <View style={styles.iconContainer}>
            <Icon3 name="form" size={20} color="#111" />
          </View>
          <Text style={styles.text}>Form</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => changeScreen("Map")}
        >
          <View style={styles.iconContainer}>
            <Icon2 name="map" size={20} color="#111" />
          </View>
          <Text style={styles.text}>Map</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => changeScreen("Chat")}
        >
          <View style={styles.iconContainer}>
            <Icon2 name="chat" size={20} color="#111" />
          </View>
          <Text style={styles.text}>Chat</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => changeScreen("List")}
        >
          <View style={styles.iconContainer}>
            <Icon4 name="align-justify" size={24} color="#111" />
          </View>
          <Text style={styles.text}>List</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => changeScreen("Login")}
        >
          <View style={styles.iconContainer}>
            <Icon6 name="login-variant" size={20} color="#111" />
          </View>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => changeScreen("ProtectedPage")}
        >
          <View style={styles.iconContainer}>
            <Icon2 name="lock" size={20} color="#111" />
          </View>
          <Text style={styles.text}>Profile (protected page)</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => changeScreen("Theme")}
        >
          <View style={styles.iconContainer}>
            <Icon5 name="settings-sharp" size={20} color="#111" />
          </View>
          <Text style={styles.text}>Theme settings</Text>
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
  menuButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
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
  iconContainer: {
    width: 23,
    textAlign: "center",
  },
  text: {
    marginLeft: 20,
    color: "#111",
  },
});
