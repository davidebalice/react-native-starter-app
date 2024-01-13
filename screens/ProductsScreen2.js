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

export default ProductList = () => {
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
    console.log(productId);
    navigation.navigate("Product", { productId });
  };

  const formattedPrice = (price) => {
    return price.toLocaleString("it-IT", {
      minimumFractionDigits: 2,
    });
  };

  return (
    <View style={styles.container}>
      <ProductsMenu selected={2} />
      <SearchBar handleSearch={handleSearch} searchQueryn={searchQuery} />
      <ProductsCategories card={2} category={category} />
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={filteredProducts}
        horizontal={false}
        numColumns={2}
        keyExtractor={(item) => {
          return item.id;
        }}
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />;
        }}
        renderItem={(post) => {
          const item = post.item;
          return (
            <TouchableOpacity
              style={styles.card}
              onPress={() => goToProductDetail(item.id)}
            >
              <View style={styles.cardHeader}>
                <View>
                  <Text style={styles.title}>{item.title}</Text>
                </View>
              </View>

              <View style={styles.cardImageContainer}>
                <Image
                  style={styles.cardImage}
                  source={{ uri: item.image }}
                  resizeMode="contain"
                />
              </View>

              <View style={styles.cardFooter}>
                <View style={styles.socialBarContainer}>
                  <Text style={styles.price}>
                    € {formattedPrice(item.price)}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor: "#E6E6E6",
    marginTop: 10,
  },
  listContainer: {
    alignItems: "center",
  },
  separator: {
    marginTop: 10,
  },
  card: {
    shadowColor: "#00000021",
    shadowOffset: {
      width: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor: "white",
    flexBasis: "47%",
    marginHorizontal: 5,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    flex: 1,
    height: 140,
    width: null,
  },
  cardImageContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#dddddd",
    paddingTop: 10,
    paddingBottom: 10,
  },
  title: {
    fontSize: 15,
    flex: 1,
    height: 60,
    overflow: "hidden",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4caf50",
  },
  buyNow: {
    color: "purple",
  },
  icon: {
    width: 25,
    height: 25,
  },
  socialBarContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  socialBarSection: {
    justifyContent: "center",
    flexDirection: "row",
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: "flex-end",
    justifyContent: "center",
  },
  socialBarButton: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 1,
    alignItems: "center",
  },
});
