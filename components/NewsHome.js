import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

export default Profile = () => {
  const matches = [
    {
      id: 1,
      photo: "https://www.aroundweb.it/react/starter-app/news1.jpg",
      name: "Aliquip do consectetur esse et adipiscing adipiscing lorem consequat quis.",
    },
    {
      id: 2,
      photo: "https://www.aroundweb.it/react/starter-app/news2.jpg",
      name: "Sed aliqua ut veniam sed dolore fugiat sed voluptate eiusmod.",
    },
    {
      id: 3,
      photo: "https://www.aroundweb.it/react/starter-app/news3.jpg",
      name: "Et minim veniam consequat fugiat veniam quis elit enim elit.",
    },
    {
      id: 4,
      photo: "https://www.aroundweb.it/react/starter-app/news4.jpg",
      name: "Consequat minim magna aliquip lorem fugiat consequat amet incididunt esse.",
    },
    {
      id: 5,
      photo: "https://www.aroundweb.it/react/starter-app/news5.jpg",
      name: "Minim labore sit cillum enim magna amet enim magna laboris.",
    },
  ];

  const imageMapping = {
    news1: require('../assets/img/news1.jpg'),
    // altre immagini con i loro nomi e percorsi
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Latest news</Text>
          <TouchableOpacity style={styles.seeAllButton}>
            <Text style={styles.seeAllButtonText}>See all</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sectionBody}>
          <ScrollView horizontal contentContainerStyle={styles.sectionScroll}>
            {matches.map(({ photo, id, name }) => (
              <View style={styles.sectionCard} key={id}>
                <Image style={styles.sectionImage} source={{uri:photo}} />
                <View style={styles.sectionInfo}>
                  <Text style={styles.sectionLabel}>{name}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
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
  },
  sectionScroll: {
    paddingBottom: 20,
  },
  sectionCard: {
    width: 200,
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
  sectionLabel: {
    fontSize: 12,
    marginBottom: 2,
  },
});
