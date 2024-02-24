import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  Alert,
  Animated,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Spacer from "../components/Spacer";
import avatar1 from "../assets/img/avatar1.jpg";
import avatar2 from "../assets/img/avatar2.jpg";
import image1 from "../assets/img/slide1.jpg";
import image2 from "../assets/img/slide2.jpg";
import image3 from "../assets/img/slide3.jpg";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/MaterialIcons";

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
  const panelHeight = useRef(new Animated.Value(0)).current;
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
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

  const openPanel = () => {
    Animated.timing(panelHeight, {
      toValue: 260,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setOpen(true);
  };

  const closePanel = () => {
    Animated.timing(panelHeight, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setOpen(false);
  };

  const addMessage = () => {
    setMessages([
      ...messages,
      {
        sender: "Mario Rossi",
        text: message,
        id: messages.length.toString(),
        avatar: avatar1,
      },
    ]);
    setMessage("");
    closePanel();
  };

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
      <View style={styles.floatingButtonContainer}>
        <TouchableOpacity
          style={styles.floatingButton}
          onPress={() => {
            if (panelHeight._value === 0) {
              openPanel();
            } else {
              closePanel();
            }
          }}
        >
          {open ? (
            <Icon name="close" size={20} color="#888" style={styles.plusIcon} />
          ) : (
            <Icon name="plus" size={20} color="#888" style={styles.plusIcon} />
          )}
        </TouchableOpacity>
      </View>
      <StoryList />
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Animated.View style={[styles.panel, { height: panelHeight }]}>
        <Text>Add message</Text>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Add item"
        />
        <TouchableOpacity style={styles.addButton} onPress={addMessage}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </Animated.View>
      <Spacer height={40} />
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
  floatingButtonContainer: {
    position: "absolute",
    bottom: 60,
    right: 20,
  },
  floatingButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    color: "#ffffff",
    backgroundColor: "#0fa327",
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    zIndex: 10,
  },
  plusIcon: {
    color: "#fff",
    fontSize: 28,
  },
  panel: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "#dddddd",
  },
  input: {
    height: 40,
    marginBottom: 10,
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  addButton: {
    backgroundColor: "#ccc",
    padding: 10,
    alignItems: "center",
    zIndex: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    marginBottom: 100,
  },
  buttonText: {
    fontWeight: "bold",
  },
});

export default Comments;
