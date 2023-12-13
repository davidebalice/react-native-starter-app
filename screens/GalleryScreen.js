import React, { useRef, useState } from "react";
import Lightbox from "react-native-lightbox";
import { StyleSheet } from "react-native";
import Spacer from "../components/Spacer";
import {
  Button,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import img1 from "../assets/img/image1.jpg";
import img2 from "../assets/img/image2.jpg";
import img3 from "../assets/img/image3.jpg";
import img4 from "../assets/img/image4.jpg";
import img5 from "../assets/img/image5.jpg";

const GalleryScreen = () => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.columnsContainer}>
          <View style={styles.column}>
            <Lightbox
              renderContent={() => (
                <Image
                  style={{ width: windowWidth, height: windowHeight }}
                  source={img1}
                  resizeMode="contain"
                />
              )}
            >
              <Image source={img1} style={styles.image} resizeMode="cover" />
            </Lightbox>
          </View>
          <View style={styles.spacer} />
          <View style={styles.column}>
            <Lightbox
              renderContent={() => (
                <Image
                  style={{ width: windowWidth, height: windowHeight }}
                  source={img2}
                  resizeMode="contain"
                />
              )}
            >
              <Image source={img2} style={styles.image} resizeMode="cover" />
            </Lightbox>
          </View>
        </View>

        <View style={styles.columnsContainer}>
          <View style={styles.column}>
            <Lightbox
              renderContent={() => (
                <Image
                  style={{ width: windowWidth, height: windowHeight }}
                  source={img4}
                  resizeMode="contain"
                />
              )}
            >
              <Image source={img4} style={styles.image} resizeMode="cover" />
            </Lightbox>
          </View>
          <View style={styles.spacer} />
          <View style={styles.column}>
            <Lightbox
              renderContent={() => (
                <Image
                  style={{ width: windowWidth, height: windowHeight }}
                  source={img5}
                  resizeMode="contain"
                />
              )}
            >
              <Image source={img5} style={styles.image} resizeMode="cover" />
            </Lightbox>
          </View>
        </View>
        <Spacer height={80} />
      </View>
    </ScrollView>
  );
};

export default GalleryScreen;

const styles = StyleSheet.create({
  fullscreenPhoto: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "start",
    paddingTop: 4,
    paddingHorizontal: 2,
  },
  columnsContainer: {
    flexDirection: "row",
    width: "100%",
  },
  column: {
    flex: 1,
    alignItems: "center",
  },
  columnText: {
    fontSize: 15,
    marginBottom: 10,
    textAlign: "justify",
  },
  spacer: {
    width: 2,
  },
  imagesContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 2,
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 150,
    borderRadius: 0,
    marginBottom: 4,
  },
  image2: {
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  modalImage: {
    width: 450,
    height: 450,
    borderRadius: 0,
    marginBottom: 10,
  },
});
