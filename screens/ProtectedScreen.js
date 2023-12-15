import React, { useRef, useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import ProtectedContents from "../middlewares/ProtectedContents";
import { AuthContext } from "../context/authContext";

const ProtectedScreen = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 16,
    },
    logoutButton: {
      marginTop: 20,
      padding: 10,
      backgroundColor: "#444",
      color: "#ffffff",
      borderRadius: 6,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.3,
      shadowRadius: 3,
      elevation: 5,
    },
    buttonText: {
      color: "#ffffff",
    },
    title: {
      fontWeight: "bold",
      fontSize: 20,
      color: "#1d9a10",
      marginBottom: 10,
    },
  });

  const { token, setAuthToken } = useContext(AuthContext);

  const logout = () => {
    setAuthToken("");
  };

  return (
    <View style={styles.container}>
      <ProtectedContents>
        <Text style={styles.title}>Login successfully</Text>
        <Text>This text is visibile only to user authenticated</Text>
        <TouchableOpacity onPress={logout} style={styles.logoutButton}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </ProtectedContents>
      <View
        style={{
          flexDirection: "row",
          height: 100,
          padding: 20,
        }}
      ></View>
    </View>
  );
};

export default ProtectedScreen;
