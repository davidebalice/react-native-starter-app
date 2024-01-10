import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import Spacer from "../components/Spacer";
import avatar1 from "../assets/img/avatar1.jpg";
import avatar2 from "../assets/img/avatar2.jpg";
import image1 from "../assets/img/slide1.jpg";
import image2 from "../assets/img/slide2.jpg";
import image3 from "../assets/img/slide3.jpg";

const commentsUser = [
  {
    id: 1,
    name: "Mario Rossi",
    image: avatar1,
  },
  {
    id: 2,
    name: "Giuseppe Verdi",
    image: avatar2,
  },
];

const StoryList = () => {
  return (
    <View style={styles.storyList}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {commentsUser.map((item) => (
          <View style={styles.storyContainer} key={item.id}>
            <Image style={styles.storyImage} source={item.image} />
            <Text style={styles.storyName}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const Comments = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Mario Rossi",
      text: "Voluptate consectetur lorem lorem enim incididunt sed aliquip cillum eiusmod.",
      senderType: "user",
      avatar: avatar1,
      image: image1,
    },
    {
      id: 2,
      sender: "Giuseppe Verdi",
      text: "Incididunt esse et aliqua do magna lorem et veniam enim.",
      senderType: "other",
      avatar: avatar2,
      image: image2,
    },
    {
      id: 3,
      sender: "Giuseppe Verdi",
      text: "Do lorem quis veniam minim aliqua tempor et enim minim.",
      senderType: "user",
      avatar: avatar2,
      image: image3,
    },
  ]);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Image style={styles.avatar} source={item.avatar} />
          <Text style={styles.sender}>{item.sender}</Text>
        </View>
        <View style={styles.cardBody}>
          {item.image && <Image style={styles.cardImage} source={item.image} />}
          <Text style={styles.cardText}>{item.text}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StoryList />
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Spacer height={40}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  storyList: {
    marginTop: 0,
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  storyListText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  storyContainer: {
    marginRight: 10,
    alignItems: "center",
  },
  storyImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 5,
  },
  storyName: {
    fontSize: 12,
    fontWeight: "bold",
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  card: {
    padding: 20,
    borderRadius: 10,
    margin: 10,
    backgroundColor: "white",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  cardBody: {
    flex: 1,
  },
  sender: {
    fontWeight: "bold",
  },
  cardImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginTop: 10,
  },
  cardText: {
    marginTop: 10,
  },
});

export default Comments;
