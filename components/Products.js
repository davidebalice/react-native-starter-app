import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { Card, Paragraph } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const Products = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products", {
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

  return (
    <View style={styles.container}>
      {data &&
        data.map((item, index) => (
          <Card key={index} style={styles.card}>
            <Card.Content style={styles.cardContent}>
              <TouchableOpacity onPress={() => goToProductDetail(item.id)}>
                <View style={styles.imageContainer}>
                  <Image
                    source={{ uri: item.image }}
                    style={styles.image}
                    resizeMode="cover"
                  />
                </View>
                <View style={styles.dataContainer}>
                  <Paragraph>{item.name}</Paragraph>
                  <Paragraph>{item.title}</Paragraph>
                  <Paragraph>{item.price}</Paragraph>
                </View>
              </TouchableOpacity>
            </Card.Content>
          </Card>
        ))}
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
    width: "100%",
    aspectRatio: 16 / 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  dataContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});

export default Products;
