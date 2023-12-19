import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/Entypo";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  FlatList,
} from "react-native";

export default MenuScreen = () => {
  const data = [
    {
      id: 1,
      title: "Homepage",
      color: "#FF4500",
      typeIcon: "1",
      icon: "home",
    },
    {
      id: 1,
      title: "Text page",
      color: "#87CEEB",
      typeIcon: "2",
      icon: "text",
    },
    {
      id: 2,
      title: "Gallery",
      color: "#4682B4",
      typeIcon: "2",
      icon: "text",
    },
    {
      id: 3,
      title: "Products",
      color: "#6A5ACD",
      typeIcon: "2",
      icon: "text",
    },
    {
      id: 4,
      title: "Form",
      color: "#FF69B4",
      typeIcon: "2",
      icon: "text",
    },
    {
      id: 5,
      title: "Chat",
      color: "#00BFFF",
      typeIcon: "2",
      icon: "text",
    },
    {
      id: 6,
      title: "Login",
      color: "#00FFFF",
      typeIcon: "2",
      icon: "text",
    },
    {
      id: 8,
      title: "Theme settings",
      color: "#20B2AA",
      typeIcon: "2",
      icon: "text",
    },
    {
      id: 9,
      title: "Protected page",
      color: "#191970",
      typeIcon: "2",
      icon: "text",
    },
    {
      id: 9,
      title: "News",
      color: "#008080",
      typeIcon: "2",
      icon: "text",
    },
  ];

  const [options, setOptions] = useState(data);

  const showAlert = () => {
    Alert.alert("Option selected");
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={options}
        horizontal={false}
        numColumns={2}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={[styles.card, { backgroundColor: item.color }]}
              onPress={() => {
                showAlert(item.view);
              }}
            >
              <View style={styles.cardHeader}>
                <Text style={styles.title}>{item.title}</Text>
              </View>
              <View style={styles.cardIcon}>
                {item.typeIcon === "1" ? (
                  <Icon name={item.icon} size={40} color="#fff" />
                ) : (
                  <Icon2 name={item.icon} size={40} color="#fff" />
                )}
              </View>
              <View style={styles.cardFooter}>
                <Text style={styles.subTitle}>Lorem ipsum</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  list: {
    //paddingHorizontal: 5,
    backgroundColor: "#E6E6E6",
  },
  listContainer: {
    alignItems: "center",
  },

  card: {
    marginHorizontal: 2,
    marginVertical: 2,
    flexBasis: "48%",
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cardIcon: {
    paddingVertical: 17,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    height: 70,
    width: 70,
    alignSelf: "center",
  },
  title: {
    fontSize: 16,
    flex: 1,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 12,
    flex: 1,
    color: "#FFFFFF",
  },
  icon: {
    height: 20,
    width: 20,
  },
});
