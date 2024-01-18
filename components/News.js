import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Card, Paragraph } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import news from "../news";
import { format } from "date-fns";

const Gallery = () => {
  const [data, setData] = useState([]);

  const navigation = useNavigation();

  const goToNewsDetail = (newsId) => {
    navigation.navigate("NewsDetail", { newsId });
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.screenTitle}>News</Text>
        </View>
        <ScrollView>
          <View style={styles.sectionBody}>
            {news &&
              news.map(({ photo, id, title, description, date }) => (
                <TouchableOpacity
                  style={styles.sectionCard}
                  key={id}
                  onPress={() => goToNewsDetail(id)}
                >
                  <Image style={styles.sectionImage} source={{ uri: photo }} />
                  <View style={styles.sectionInfo}>
                    <Text style={styles.sectionDate}>
                      {format(new Date(date), "dd/MM/yyyy")}
                    </Text>
                    <Text style={styles.sectionTitle}>{title}</Text>
                    <Text style={styles.sectionDescription}>{description}</Text>
                  </View>
                </TouchableOpacity>
              ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  header: {
    backgroundColor: "#00BFFF",
    height: 250,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 4,
  },
  informationContainer: {
    width: 150,
    height: 150,
    marginLeft: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffffff",
  },
  label: {
    fontSize: 12,
    color: "#ffffff",
    marginTop: 10,
  },
  section: {
    paddingHorizontal: 16,
    marginVertical: 5,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
  },
  seeAllButton: {
    backgroundColor: "#A9A9A9",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
  seeAllButtonText: {
    color: "#eee",
  },
  sectionBody: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  sectionScroll: {
    paddingBottom: 20,
  },
  sectionCard: {
    width: "42%",
    minHeight: 200,
    backgroundColor: "#fff",
    shadowColor: "#B0C4DE",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 6,
  },
  sectionImage: {
    width: "100%",
    aspectRatio: 1,
  },
  sectionInfo: {
    padding: 10,
  },
  sectionTitle: {
    fontSize: 12,
    marginBottom: 2,
    fontWeight: "bold",
  },
  sectionDate: {
    fontSize: 12,
    marginBottom: 2,
  },
  sectionDescription: {
    fontSize: 12,
    marginBottom: 2,
  },
  screenTitle: {
    fontSize: 17,
    fontWeight: "bold",
    marginLeft: 8,
    marginBottom: 10,
  },
});

export default Gallery;
