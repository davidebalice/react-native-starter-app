import React, { useRef, useState } from "react";
import { StyleSheet } from "react-native";
import Spacer from "../components/Spacer";
import News from "../components/News";
import { View, ScrollView } from "react-native";

const NewsScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <News />
        <Spacer height={80} />
      </View>
    </ScrollView>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "start",
    paddingTop: 4,
    paddingHorizontal: 2,
  },
});
