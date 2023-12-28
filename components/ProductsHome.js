import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { Card, Paragraph } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import API_URLS from "../config";

const Products = () => {
  const [data, setData] = useState([]);
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

  const goToProductDetail = (productId) => {
    navigation.navigate("Product", { productId });
  };

  const formattedPrice = (price) => {
    return price.toLocaleString("it-IT", {
      minimumFractionDigits: 2,
    });
  };

  return (
    <View style={styles.container}>
      {data &&
        data
          .map((item, index) => (
            <Card key={index} style={styles.card}>
              <Card.Content style={styles.cardContent}>
                <TouchableOpacity onPress={() => goToProductDetail(item.id)}>
                  <View style={styles.imageContainer}>
                    <Image
                      source={{ uri: item.image }}
                      style={styles.image}
                      resizeMode="contain"
                    />
                  </View>
                  <View style={styles.dataContainer}>
                    <Paragraph style={styles.title}>{item.title}</Paragraph>
                    <Paragraph style={styles.price}>
                      € {formattedPrice(item.price)}
                    </Paragraph>
                  </View>
                </TouchableOpacity>
              </Card.Content>
            </Card>
          ))
          .slice(0, 6)}
    </View>
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
    width: "46%",
    margin: "2%",
    borderColor: "#ddd",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    overflow: "hidden",
  },
  cardContent: {
    width: "100%",
    backgroundColor: "#ffffff",
    margin: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  imageContainer: {
    width: "90%",
    aspectRatio: 16 / 20,
    overflow: "hidden",
    marginLeft: "4%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  dataContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    display: "flex",
  },
  title: {
    height: 40,
    borderWidth: 0,
    fontSize: 13,
    overflow: "hidden",
    fontWeight: "bold",
    marginTop: 5,
  },
  price: {
    borderWidth: 0,
    textAlign: "right",
    fontSize: 15,
    color: "#1280ae",
    overflow: "hidden",
    fontWeight: "bold",
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingTop: 7,
  },
});

export default Products;
