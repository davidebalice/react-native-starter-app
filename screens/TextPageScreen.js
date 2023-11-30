import React, { useRef, useState } from "react";
import { StyleSheet } from "react-native";
import {
  Button,
  Text,
  View,
  Image,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import img1 from "../assets/img/image1.jpg";
import img2 from "../assets/img/image2.jpg";

const TextPageScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImagePress = (imagePath) => {
    setSelectedImage(imagePath);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.singleText}>
        Enim minim fugiat elit dolore eiusmod sit do minim tempor duis aliquip
        amet et lorem tempor consequat sed magna veniam adipiscing laboris
        cillum ipsum sit laboris fugiat fugiat fugiat et.
      </Text>

      <View style={styles.columnsContainer}>
        <View style={styles.column}>
          <TouchableWithoutFeedback onPress={() => handleImagePress(img1)}>
            <Image source={img1} style={styles.image} resizeMode="cover" />
          </TouchableWithoutFeedback>
          <Text style={styles.columnText}>
            Sed commodo adipiscing labore laboris amet voluptate quis enim
            consequat ut dolor nostrud eiusmod minim veniam consequat lorem
            tempor labore voluptate dolor aliquip et fugiat voluptate elit ipsum
            cillum dolor.
          </Text>
        </View>
        <View style={styles.spacer} />
        <View style={styles.column}>
          <TouchableWithoutFeedback onPress={() => handleImagePress(img2)}>
            <Image source={img2} style={styles.image} resizeMode="cover" />
          </TouchableWithoutFeedback>
          <Text style={styles.columnText}>
            Veniam dolore consequat elit enim exercitation ut minim amet minim
            dolor cillum incididunt commodo fugiat minim ut duis ipsum lorem
            exercitation aliquip lorem esse eiusmod labore nostrud consectetur
            voluptate ipsum.
          </Text>
        </View>
      </View>

      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={closeModal}
      >
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalContainer}>
            <Image
              source={selectedImage}
              style={styles.modalImage}
              resizeMode="contain"
            />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default TextPageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "start",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  singleText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "justify",
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
    fontSize: 15,
    marginBottom: 10,
    textAlign: "justify",
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
  modalImage: {
    width: 450,
    height: 450,
    borderRadius: 0,
    marginBottom: 10,
  },
});
