import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Card, Paragraph } from "react-native-paper";
import axios from "axios";
import API_URLS from "../config";
import ProductsMenu from "../components/ProductsMenu";
import SearchBar from "../components/SearchBar";
import ProductsCategories from "../components/ProductsCategories";

const ProductList = () => {
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

  const formattedPrice = (price) => {
    return price.toLocaleString("it-IT", {
      minimumFractionDigits: 2,
    });
  };

  return (
    <View style={styles.container}>
      <ProductsMenu selected={1} />
      <SearchBar handleSearch={handleSearch} searchQueryn={searchQuery} />
      <ProductsCategories card={1} category={category}/>
      <ScrollView>
        <View style={styles.CardContainer}>
          {filteredProducts &&
            filteredProducts.map((item, index) => (
              <Card style={styles.card}>
                <TouchableOpacity onPress={() => goToProductDetail(item.id)}>
                  <View style={styles.imageContainer}>
                    <Image
                      source={{ uri: item.image }}
                      style={styles.image}
                      resizeMode="contain"
                    />
                  </View>
                  <View style={styles.dataContainer}>
                    <Paragraph style={styles.title}>{item.title}</Paragraph>
                    <Paragraph style={styles.price}>
                      € {formattedPrice(item.price)}
                    </Paragraph>
                  </View>
                </TouchableOpacity>
              </Card>
            ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  CardContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#ffffff",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 0,
    alignItems: "flex-start",
  },
  searchInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  productItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  card: {
    width: "46%",
    margin: "2%",
    backgroundColor: "#ffffff",
    borderWidth: 0,
    overflow: "hidden",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    justifyContent: "center",
  },
  imageContainer: {
    width: "88%",
    display: "flex",
    aspectRatio: 16 / 22,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "10%",
  },
  image: {
    width: "100%",
    height: "100%",
    alignSelf: "center",
    justifyContent: "center",
  },
  dataContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    display: "flex",
  },
  title: {
    height: 40,
    borderWidth: 0,
    fontSize: 13,
    overflow: "hidden",
    fontWeight: "bold",
    marginTop: 5,
  },
  price: {
    borderWidth: 0,
    textAlign: "right",
    fontSize: 15,
    color: "#1280ae",
    overflow: "hidden",
    fontWeight: "bold",
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingTop: 7,
  },
});

export default ProductList;
