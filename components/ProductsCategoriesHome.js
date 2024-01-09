import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Avatar, Button, Card, Text, Paragraph } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import API_URLS from "../config";

const ProductsCategoriesHome = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URLS.productApi, {
        httpsAgent: {
          rejectUnauthorized: false,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });

      setData(response.data);
    } catch (error) {
      console.log("error:" + error);
      console.error(error);
    }
  };

  const goToCategory = (category) => {
    navigation.navigate("Product", { category });
  };

  const uniqueCategories = [
    ...new Map(data.map((item) => [item["category"], item])).values(),
  ];

  return (
    <ScrollView horizontal>
      {uniqueCategories.map((category) => (
        <ImageBackground
          style={styles.card}
          resizeMode="cover"
          key={category.id}
          source={
            category.category === "jewelery"
              ? require(`../assets/img/jewelery.jpg`)
              : category.category === "men's clothing"
              ? require(`../assets/img/mensclothing.jpg`)
              : category.category === "women's clothing"
              ? require(`../assets/img/womensclothing.jpg`)
              : category.category === "electronics"
              ? require(`../assets/img/electronics.jpg`)
              : require(`../assets/img/jewelery.jpg`)
          }
        >
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              {category.category.charAt(0).toUpperCase() +
                category.category.slice(1)}
            </Text>
          </View>

          <View style={styles.overlay}></View>
        </ImageBackground>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#ffffff",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 0,
  },
  card: {
    margin: 14,
    marginLeft: 0,
    width: 150,
    height: 100,
    overflow: "hidden",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 4,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "black",
    opacity: 0.5,
  },
  textContainer: {
    position: "absolute",
    top: "40%",
    alignSelf: "center",
    zIndex: 1,
  },
  text: {
    color: "#ffffff",
    textAlign: "center",
    display: "flex",
    fontSize: 13,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});

export default ProductsCategoriesHome;
