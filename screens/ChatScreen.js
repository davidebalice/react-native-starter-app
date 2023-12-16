import React, { useState, useRef } from "react";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
const { width, height } = Dimensions.get("window");
export default Chat = () => {
  const flatListRef = useRef();
  const messagesData = [
    {
      id: 1,
      sent: true,
      msg: "Lorem ipsum dolor",
      image: "https://www.bootdey.com/img/Content/avatar/avatar1.png",
    },
    {
      id: 2,
      sent: true,
      msg: "sit amet, consectetuer",
      image: "https://www.bootdey.com/img/Content/avatar/avatar1.png",
    },
    {
      id: 3,
      sent: false,
      msg: "adipiscing elit. Aenean ",
      image: "https://www.bootdey.com/img/Content/avatar/avatar6.png",
    },
    {
      id: 4,
      sent: true,
      msg: "commodo ligula eget dolor.",
      image: "https://www.bootdey.com/img/Content/avatar/avatar1.png",
    },
    {
      id: 5,
      sent: false,
      msg: "Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes",
      image: "https://www.bootdey.com/img/Content/avatar/avatar6.png",
    },
    {
      id: 6,
      sent: true,
      msg: "nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo",
      image: "https://www.bootdey.com/img/Content/avatar/avatar1.png",
    },
    {
      id: 7,
      sent: false,
      msg: "rhoncus ut, imperdiet",
      image: "https://www.bootdey.com/img/Content/avatar/avatar6.png",
    },
    {
      id: 8,
      sent: false,
      msg: "a, venenatis vitae",
      image: "https://www.bootdey.com/img/Content/avatar/avatar6.png",
    },
  ];
  const [messages, setMessages] = useState(messagesData);
  const [newMessage, setNewMessage] = useState("");

  const reply = () => {
    var messagesList = messages;
    messagesList.push({
      id: Math.floor(Math.random() * 99999999999999999 + 1),
      sent: false,
      msg: newMessage,
      image: "https://www.bootdey.com/img/Content/avatar/avatar6.png",
    });
    setNewMessage("");
    setMessages(messagesList);
  };

  const send = () => {
    if (newMessage.length > 0) {
      let messagesList = messages;
      messagesList.push({
        id: Math.floor(Math.random() * 99999999999999999 + 1),
        sent: true,
        msg: newMessage,
        image: "https://www.bootdey.com/img/Content/avatar/avatar1.png",
      });
      setMessages(messagesList);
      setTimeout(() => {
        reply();
      }, 2000);
      flatListRef.current.scrollToEnd({ animated: true });
    }
  };

  const renderItem = ({ item }) => {
    if (item.sent === false) {
      return (
        <View style={styles.eachMsg}>
          <Image source={{ uri: item.image }} style={styles.userPic} />
          <View style={styles.msgBlock}>
            <Text style={styles.msgTxt}>{item.msg}</Text>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.rightMsg}>
          <View style={styles.rightBlock}>
            <Text style={styles.rightTxt}>{item.msg}</Text>
          </View>
          <Image source={{ uri: item.image }} style={styles.userPic} />
        </View>
      );
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "flex-start" }}>
      <FlatList
        style={styles.list}
        ref={flatListRef}
        extraData={messages}
        data={messages}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={renderItem}
      />
      <KeyboardAvoidingView behavior="padding" style={styles.keyboard}>
        <View style={styles.inputContainer}>
          <View style={styles.input}>
            <TextInput
              style={{ flex: 1 }}
              placeholderTextColor="#696969"
              onChangeText={(msg) => setNewMessage(msg)}
              blurOnSubmit={false}
              onSubmitEditing={() => send()}
              placeholder="Type a message"
              returnKeyType="send"
            />
            <TouchableOpacity onPress={() => send()} style={styles.sendButton}>
              <FontAwesome5 name="arrow-circle-right" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
    justifyContent: "center",
    alignItems: "start",
  },
  image: {
    width,
    height,
  },
  list: {
    maxHeight: "78%",
    top: 0,
    marginTop: 0,
  },
  header: {
    height: 65,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#075e54",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  right: {
    flexDirection: "row",
  },
  chatTitle: {
    color: "#fff",
    fontWeight: "600",
    margin: 10,
    fontSize: 15,
  },
  chatImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    margin: 5,
  },
  input: {
    flexDirection: "row",
    alignSelf: "flex-start",
    padding: 10,
    height: 40,
    width: width - 20,
    backgroundColor: "#fff",
    margin: 10,
    shadowColor: "#3d3d3d",
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 1,
    },
    borderColor: "#696969",
    borderWidth: 1,
  },
  inputContainer: {
    position: "absolute",
    bottom: 50,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d1d1d1",
  },
  eachMsg: {
    flexDirection: "row",
    alignItems: "flex-end",
    margin: 5,
  },
  rightMsg: {
    flexDirection: "row",
    alignItems: "flex-end",
    margin: 5,
    alignSelf: "flex-end",
  },
  userPic: {
    height: 40,
    width: 40,
    margin: 5,
    borderRadius: 20,
    backgroundColor: "#f8f8f8",
  },
  msgBlock: {
    width: 220,
    borderRadius: 5,
    backgroundColor: "#ffffff",
    padding: 10,
    shadowColor: "#3d3d3d",
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 1,
    },
  },
  rightBlock: {
    width: 220,
    borderRadius: 5,
    backgroundColor: "#97c163",
    padding: 10,
    shadowColor: "#3d3d3d",
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 1,
    },
  },
  msgTxt: {
    fontSize: 15,
    color: "#555",
    fontWeight: "600",
  },
  rightTxt: {
    fontSize: 15,
    color: "#202020",
    fontWeight: "600",
  },
  sendButton: {
    width: 38,
    height: 38,
    borderRadius: 6,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -10,
  },
});
