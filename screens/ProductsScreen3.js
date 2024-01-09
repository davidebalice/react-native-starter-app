import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  FlatList,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import ProductsMenu from "../components/ProductsMenu";
import SearchBar from "../components/SearchBar";
import ProductsCategories from "../components/ProductsCategories";
import axios from "axios";
import API_URLS from "../config";

const ProductCard = ({ item, onIncrement, onDecrement }) => {
  const formattedPrice = (price) => {
    return price.toLocaleString("it-IT", {
      minimumFractionDigits: 2,
    });
  };
  return (
    <View style={styles.productCard}>
      <Image
        source={{ uri: item.image }}
        style={styles.productImage}
        resizeMode="contain"
      />
      <View style={styles.productInfo}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
        <Text style={styles.productPrice}>€ {formattedPrice(item.price)}</Text>
      </View>
    </View>
  );
};

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

  const renderProductItem = ({ item }) => (
    <ProductCard
      item={item}
      onIncrement={() => handleIncrement(item)}
      onDecrement={() => handleDecrement(item)}
    />
  );

  return (
    <View style={styles.container}>
      <ProductsMenu selected={3} />
      <SearchBar handleSearch={handleSearch} searchQueryn={searchQuery} />
      <ProductsCategories card={3} category={category} />
      <FlatList
        data={filteredProducts}
        style={styles.productList}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 100 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f1f1f1",
  },
  productList: {
    flex: 1,
    paddingTop: 16,
  },
  productCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    padding: 16,
    marginBottom: 16,
  },
  productImage: {
    width: 80,
    height: 80,
    marginRight: 16,
  },
  productInfo: {
    flex: 1,
    marginRight: 16,
  },
  productTitle: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 4,
  },
  productDescription: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
    textAlign: "justify",
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4caf50",
  },
  productPriceText: {
    fontSize: 14,
    fontWeight: "normal",
    color: "#666",
  },
  productAmount: {
    flexDirection: "row",
    alignItems: "center",
  },
  amountButton: {
    width: 30,
    height: 30,
    backgroundColor: "#ffa726",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  amountButtonText: {
    color: "#fff",
    fontSize: 18,
  },
  amountText: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 16,
  },
  continueButton: {
    position: "absolute",
    bottom: 16,
    left: 16,
    right: 16,
    backgroundColor: "#4caf50",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
  },
  continueButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ProductList;
