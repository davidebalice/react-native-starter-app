import React, { useRef, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Avatar, Button, Card, Text} from "react-native-paper";
import Slideshow from "../components/Slideshow";
import Products from "../components/Products";
import ProductsCategories from "../components/ProductsCategories";
const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const HomeScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Slideshow />
        <ProductsCategories />
        <Products />
        <Card style={styles.card}>
          <Card.Title
            title="Card Title"
            subtitle="Card Subtitle"
            left={LeftContent}
          />
          <Card.Content>
            <Text variant="titleLarge">Card title</Text>
            <Text variant="bodyMedium">Card content</Text>
          </Card.Content>
          <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>

        <View
          style={{
            flexDirection: "column",
            height: 100,
            padding: 20,
          }}
        >
          
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center",
  },
  card: {
    width: "100%",
    marginTop: 40,
    backgroundColor: "#fff",
  },
});
