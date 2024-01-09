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
import { screens } from "../screens/screens";
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
        {screens.map((item) => (
          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => changeScreen(item.link)}
            key={item.id}
          >
            <View style={styles.iconContainer}>
              {item.typeIcon === "1" ? (
                <Icon name={item.icon} size={20} color="#111" />
              ) : item.typeIcon === "2" ? (
                <Icon2 name={item.icon} size={20} color="#111" />
              ) : item.typeIcon === "3" ? (
                <Icon3 name={item.icon} size={20} color="#111" />
              ) : item.typeIcon === "4" ? (
                <Icon4 name={item.icon} size={20} color="#111" />
              ) : item.typeIcon === "5" ? (
                <Icon5 name={item.icon} size={20} color="#111" />
              ) : (
                <Icon6 name={item.icon} size={20} color="#111" />
              )}
            </View>
            <Text style={{ marginLeft: 20 }}>{item.title}</Text>
          </TouchableOpacity>
        ))}

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
