import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  FlatList,
  Button,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import ProductsMenu from "../components/ProductsMenu";
import SearchBar from "../components/SearchBar";
import ProductsCategories from "../components/ProductsCategories";
import axios from "axios";
import API_URLS from "../config";

const ProductListView = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigation = useNavigation();
  const route = useRoute();
  const category = route.params?.category;

  const fetchProducts = async () => {
    try {
      const response = await axios.get(API_URLS.productApi, {
        httpsAgent: {
          rejectUnauthorized: false,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });

      setProducts(response.data);
      setFilteredProducts(response.data);
    } catch (error) {
      console.log("error:" + error);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (category) {
      filterProductsByCategory(category);
    }
  }, [category]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const filterProductsByCategory = (category) => {
    const filtered = products.filter(
      (product) => product.category === category
    );
    setFilteredProducts(filtered);
  };

  const goToProductDetail = (productId) => {
    navigation.navigate("Product", { productId });
  };

  const productCard = ({ item }) => {
    const formattedPrice = (price) => {
      return price.toLocaleString("it-IT", {
        minimumFractionDigits: 2,
      });
    };
    return (
      <TouchableOpacity style={styles.product} onPress={() => goToProductDetail(item.id)}>
        <Image
          style={styles.image}
          source={{ uri: item.image }}
          resizeMode="contain"
        />
        <View style={styles.info}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>€ {formattedPrice(item.price)}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <ProductsMenu selected={4} />
      <SearchBar handleSearch={handleSearch} searchQueryn={searchQuery} />
      <ProductsCategories card={4} category={category} />

      <FlatList
        data={filteredProducts}
        renderItem={productCard}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f1f1f1",
  },
  product: {
    backgroundColor: "#fff",
    margin: 10,
    padding: 20,
    alignItems: "center",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  info: {
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4caf50",
  },
};

export default ProductListView;
