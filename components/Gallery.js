import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
} from "react-native";
import { Card, Paragraph } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Lightbox from "react-native-lightbox";
import axios from "axios";
import API_URLS from "../config";

const Gallery = () => {
  const [data, setData] = useState([]);
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const navigation = useNavigation();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URLS.galleryApi, {
        httpsAgent: {
          rejectUnauthorized: false,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });
      setData(response.data.gallery);
    } catch (error) {
      console.log("error:" + error);
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      {data &&
        data.map((item, index) => (
          <Card key={index} style={styles.card}>
            <Card.Content style={styles.cardContent}>
              <View style={styles.imageContainer}>
                <View style={styles.dataContainer}>
                  <Paragraph style={styles.name}>{item.name}</Paragraph>
                </View>
                <Lightbox
                  renderContent={() => (
                    <Image
                      style={{ width: windowWidth, height: windowHeight }}
                      source={{ uri: `${API_URLS.photoUrl}${item.photo}` }}
                      resizeMode="contain"
                    />
                  )}
                >
                  <Image
                    source={{ uri: `${API_URLS.photoUrl}${item.photo}` }}
                    style={styles.image}
                    resizeMode="cover"
                  />
                </Lightbox>
              </View>
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
    width: "47%",
    margin: "1%",
    borderColor: "#ddd",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    overflow: "hidden",
    borderRadius: 0,
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
    aspectRatio: 16 / 18,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  dataContainer: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    zIndex: 100,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    position: "absolute",
    bottom: 0,
    width: "100%",
    color: "#ffffff",
  },
  name: {
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "center"
  },
});

export default Gallery;
