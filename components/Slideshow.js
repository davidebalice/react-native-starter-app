import React, { useRef, useEffect } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Swiper from "react-native-swiper";

const Slideshow = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current) {
        swiperRef.current.scrollBy(1, true);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const images = [
    {
      image: require("../assets/img/slide1.jpg"),
      text: "Descrizione immagine 1",
    },
    {
      image: require("../assets/img/slide2.jpg"),
      text: "Descrizione immagine 2",
    },
    {
      image: require("../assets/img/slide3.jpg"),
      text: "Descrizione immagine 3",
    },
  ];

  return (
    <Swiper ref={swiperRef} style={styles.wrapper} autoplay={false}>
      {images &&
        images.map((item, index) => (
          <View key={index} style={styles.slide}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.overlay}>
              <Text style={styles.text}>{item.text}</Text>
            </View>
          </View>
        ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: { height: 300 },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  overlay: {
    position: "absolute",
    bottom: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});

export default Slideshow;
