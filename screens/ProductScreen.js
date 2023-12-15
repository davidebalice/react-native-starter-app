import React, { useState, useEffect } from "react";
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

const ProductScreen = ({ route }) => {
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

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>Price: ${product.price}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <TouchableOpacity
          onPress={toggleContactForm}
          style={styles.contactButton}
        >
          <Text style={styles.contactButtonText}>Contact Seller</Text>
        </TouchableOpacity>
        {showContactForm && <ContactForm />}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    color: "green",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
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
});

export default ProductScreen;
