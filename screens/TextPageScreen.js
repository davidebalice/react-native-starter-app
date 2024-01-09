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

const TextPageScreen = () => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.singleText}>
          Enim minim fugiat elit dolore eiusmod sit do minim tempor duis aliquip
          amet et lorem tempor consequat sed magna veniam adipiscing laboris
          cillum ipsum sit laboris fugiat fugiat fugiat et.
        </Text>

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
            <Text style={styles.columnText}>
              Sed commodo adipiscing labore laboris amet voluptate quis enim
              consequat ut dolor nostrud eiusmod minim veniam consequat lorem
              tempor labore voluptate dolor aliquip et fugiat voluptate elit
              ipsum cillum dolor.
            </Text>
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
            <Text style={styles.columnText}>
              Veniam dolore consequat elit enim exercitation ut minim amet minim
              dolor cillum incididunt commodo fugiat minim ut duis ipsum lorem
              exercitation aliquip lorem esse eiusmod labore nostrud consectetur
              voluptate ipsum.
            </Text>
          </View>
        </View>

        <View style={styles.columnsContainer}>
          <Lightbox
            renderContent={() => (
              <Image
                style={{ width: windowWidth, height: windowHeight }}
                source={img3}
                resizeMode="contain"
              />
            )}
          >
            <Image
              source={img3}
              style={[styles.image2, { width: windowWidth - 40 }]}
              resizeMode="cover"
            />
          </Lightbox>
        </View>

        <Text style={styles.singleText}>
          Enim minim fugiat elit dolore eiusmod sit do minim tempor duis aliquip
          amet et lorem tempor consequat sed magna veniam adipiscing laboris
          cillum ipsum sit laboris fugiat fugiat fugiat et.
        </Text>

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
            <Text style={styles.columnText}>
              Sed commodo adipiscing labore laboris amet voluptate quis enim
              consequat ut dolor nostrud eiusmod minim veniam consequat lorem
              tempor labore voluptate dolor aliquip et fugiat voluptate elit
              ipsum cillum dolor.
            </Text>
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
            <Text style={styles.columnText}>
              Veniam dolore consequat elit enim exercitation ut minim amet minim
              dolor cillum incididunt commodo fugiat minim ut duis ipsum lorem
              exercitation aliquip lorem esse eiusmod labore nostrud consectetur
              voluptate ipsum.
            </Text>
          </View>
        </View>
        <Spacer height={80} />
      </View>
    </ScrollView>
  );
};

export default TextPageScreen;

const styles = StyleSheet.create({
  fullscreenPhoto: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "start",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  singleText: {
    fontSize: 15,
    marginBottom: 20,
    textAlign: "justify",
    lineHeight: 22
  },
  columnsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  column: {
    flex: 1,
    alignItems: "center",
  },
  columnText: {
    fontSize: 14,
    marginBottom: 10,
    textAlign: "justify",
    lineHeight: 22
  },
  spacer: {
    width: 20,
  },
  imagesContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 20,
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: 170,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
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
