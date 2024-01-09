import React, { useRef, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";
import Slideshow from "../components/Slideshow";
import ProductsHome from "../components/ProductsHome";
import ProductsCategoriesHome from "../components/ProductsCategoriesHome";
import InfoHome from "../components/InfoHome";
import NewsHome from "../components/NewsHome";
import Carousel from "../components/Carousel";

const HomeScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Slideshow />
        <ProductsCategoriesHome />
        <ProductsHome />
        <InfoHome />
        <NewsHome />
        <Carousel />
        <View
          style={{
            flexDirection: "column",
            height: 70,
            padding: 10,
          }}
        ></View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center",
  },
  card: {
    width: "100%",
    marginTop: 40,
    backgroundColor: "#fff",
  },
});
