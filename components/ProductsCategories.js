import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  Text,
} from "react-native";
import { Avatar, Button, Card, Paragraph } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";
import API_URLS from "../config";

const ProductsCategories = ({ card, category }) => {
  const [data, setData] = useState([]);
  const [showCat, setShowCat] = useState(false);
  const navigation = useNavigation();
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
    if (card === 2) {
      navigation.navigate("Products" + card, { category });
    } else {
      navigation.navigate("Products", { category });
    }
  };

  const uniqueCategories = [
    ...new Map(data.map((item) => [item["category"], item])).values(),
  ];

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <>
      <View style={styles.row}>
        {category ? (
          <Text style={styles.category}>{capitalizeFirstLetter(category)}</Text>
        ) : (
          <Text></Text>
        )}

        <TouchableOpacity
          style={styles.button}
          onPress={() => setShowCat(!showCat)}
        >
          <Text style={styles.buttonText}>Categories</Text>
          {showCat ? (
            <Icon
              name="chevron-up"
              size={20}
              color="#111"
              style={styles.icon}
            />
          ) : (
            <Icon
              name="chevron-down"
              size={20}
              color="#111"
              style={styles.icon}
            />
          )}
        </TouchableOpacity>
      </View>
      {showCat && (
        <ScrollView horizontal style={styles.container}>
          {uniqueCategories.map((category) => (
            <TouchableOpacity onPress={() => goToCategory(category.category)}>
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
                    {" "}
                    {category.category.charAt(0).toUpperCase() +
                      category.category.slice(1)}
                  </Text>
                </View>
                <View style={styles.overlay}></View>
              </ImageBackground>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 0,
    marginRight: 6,
  },
  container: {
    flexDirection: "row",
    height: 260,
    padding: 0,
    width: "96%",
    textAlign: "left",
    marginLeft: 5,
  },
  card: {
    margin: 14,
    marginLeft: 0,
    width: 150,
    height: 70,
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
    top: "35%",
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
  category: {
    marginLeft: 5,
    fontWeight: "bold",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    marginRight: 5,
    color: "#000",
  },
  icon: {
    marginLeft: 5,
  },
});

export default ProductsCategories;
