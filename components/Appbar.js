import React, { useContext } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import ThemeContext from "../context/themeContext";

const Appbar = ({ onLeftPress, onRightPress, openDrawer }) => {
  const { theme } = useContext(ThemeContext);

  const styles = {
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 10,
      paddingTop: 30,
      backgroundColor: theme.colors.background,
    },
    titleContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      fontSize: 18,
      color: "white",
    },
    iconContainer: {
      padding: 10,
    },
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onLeftPress} style={styles.iconContainer}>
        <Icon
          name="bars"
          size={30}
          color={theme.colors.text}
          onPress={openDrawer}
        />
      </TouchableOpacity>

      <View style={styles.titleContainer}>
        <Image
          source={theme.logo}
          style={{ width: 110, height: 70 }}
          resizeMode="contain"
        />
      </View>

      <TouchableOpacity
        onPress={onRightPress}
        style={styles.iconContainer}
      ></TouchableOpacity>
    </View>
  );
};

export default Appbar;
