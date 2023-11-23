import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Appbar = ({ title, onLeftPress, onRightPress, openDrawer }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onLeftPress} style={styles.iconContainer}>
        <Icon name="bars" size={30} color="white" onPress={openDrawer} />
      </TouchableOpacity>
      
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title} logo</Text>
      </View>
      
      <TouchableOpacity onPress={onRightPress} style={styles.iconContainer}>
        {/* Aggiungi eventuali altre icone o azioni */}
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    paddingTop: 30,
    backgroundColor: "#2196F3",
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

export default Appbar;
