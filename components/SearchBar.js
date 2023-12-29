import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const SearchBar = ({ handleSearch, searchQuery }) => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search products..."
        onChangeText={handleSearch}
        value={searchQuery}
      />
      <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 8,
    marginLeft: 8,
    width: "96%",
  },
  searchBar: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    marginLeft: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
});

export default SearchBar;
