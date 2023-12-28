import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  FlatList,
  Button,
} from "react-native";
import ProductsMenu from "../components/ProductsMenu";
import axios from "axios";
import API_URLS from "../config";

const ProductListView = () => {
  const products = [
    {
      id: "1",
      name: "Product 1",
      price: "$99.99",
      image: "https://via.placeholder.com/640x640/00BFFF/000000",
    },
    {
      id: "2",
      name: "Product 2",
      price: "$129.99",
      image: "https://via.placeholder.com/640x640/F08080/000000",
    },
    {
      id: "3",
      name: "Product 3",
      price: "$149.99",
      image: "https://via.placeholder.com/640x640/20B2AA/000000",
    },
    {
      id: "4",
      name: "Product 4",
      price: "$149.99",
      image: "https://via.placeholder.com/640x640/FF00FF/000000",
    },
  ];

  const renderProduct = ({ item }) => {
    return (
      <View style={styles.product}>
        <Image style={styles.image} source={{ uri: item.image }} />
        <View style={styles.info}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
        <Button title="Add to Cart" onPress={() => {}} />
      </View>
    );
  };

  return (
    <FlatList
      data={products}
      renderItem={renderProduct}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = {
  product: {
    backgroundColor: "#fff",
    margin: 10,
    padding: 20,
    alignItems: "center",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  info: {
    marginTop: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    color: "#999",
  },
};

export default ProductListView;
