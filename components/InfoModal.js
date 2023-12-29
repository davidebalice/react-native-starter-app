import React, { useContext, useState } from "react";
import {
  View,
  Text,
  Modal,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const InfoModal = ({ modalVisible, setModalVisible }) => {
  const styles = {
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalView: {
      backgroundColor: "white",
      padding: 20,
      paddingTop: 4,
      borderRadius: 10,
      alignItems: "center",
      elevation: 5,
      width: "88%",
    },
    close: {
      position: "absolute",
      top: 6,
      right: 10,
    },
    text: {
      marginTop: 20,
    },
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.close}>
            <Icon
              name="close"
              size={30}
              onPress={() => setModalVisible(!modalVisible)}
            />
          </View>
          <Text style={styles.text}>Contenuto della modal</Text>
        </View>
      </View>
    </Modal>
  );
};

export default InfoModal;
