import React, { useRef, useState } from "react";
import { StyleSheet } from "react-native";
import Spacer from "../components/Spacer";
import Gallery from "../components/Gallery";
import {
  Button,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";

const GalleryScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Gallery />
        <Spacer height={80} />
      </View>
    </ScrollView>
  );
};

export default GalleryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "start",
    paddingTop: 4,
    paddingHorizontal: 2,
  }
});
