import React, { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import API_URLS from "../config";
import Spacer from "../components/Spacer";
import Icon from "react-native-vector-icons/MaterialIcons";

const ProductScreen = ({ route }) => {
  const navigation = useNavigation();
  const [product, setProduct] = useState(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const { productId } = route.params;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${API_URLS.productApi}/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error loading:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  if (!product) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const goToProducts = () => {
    navigation.navigate("Products");
  };

  const formattedPrice = (price) => {
    return price.toLocaleString("it-IT", {
      minimumFractionDigits: 2,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => goToProducts()}
      >
        <View style={styles.buttonBack}>
          <Icon name="arrow-back-ios" size={20} color="#111" />
          <Text>All products</Text>
        </View>
      </TouchableOpacity>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>€ {formattedPrice(product.price)}</Text>
        <View style={styles.starContainer}>
          <Image
            style={styles.star}
            source={{ uri: "https://img.icons8.com/color/40/000000/star.png" }}
          />
          <Image
            style={styles.star}
            source={{ uri: "https://img.icons8.com/color/40/000000/star.png" }}
          />
          <Image
            style={styles.star}
            source={{ uri: "https://img.icons8.com/color/40/000000/star.png" }}
          />
          <Image
            style={styles.star}
            source={{ uri: "https://img.icons8.com/color/40/000000/star.png" }}
          />
          <Image
            style={styles.star}
            source={{ uri: "https://img.icons8.com/color/40/000000/star.png" }}
          />
        </View>
        <Text style={styles.description}>{product.description}</Text>
        {showContactForm && <ContactForm />}
      </View>

      <TouchableOpacity
        onPress={toggleContactForm}
        style={styles.contactButton}
      >
        <Text style={styles.contactButtonText}>Request information</Text>
      </TouchableOpacity>
      <Spacer height={100} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopColor: "#ddd",
    borderTopWidth: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 10,
  },
  buttonBack: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    height: 30,
    marginVertical: 10,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    color: "green",
    marginBottom: 10,
    fontWeight:"bold",
  },
  description: {
    fontSize: 14,
    marginBottom: 20,
    color: "#777",
    textAlign: "justify",
  },
  contactButton: {
    backgroundColor: "blue",
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
  },
  contactButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  contactFormContainer: {
    padding: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginTop: 20,
  },
  contactFormTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  messageInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    minHeight: 100,
  },
  sendButton: {
    backgroundColor: "blue",
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  sendButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  star: {
    width: 40,
    height: 40,
  },
  starContainer: {
    justifyContent: "center",
    marginHorizontal: 30,
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 20,
  },
});

export default ProductScreen;
