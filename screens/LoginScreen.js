import React, { useState, useContext } from "react";
import {
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import API_URLS from "../config";
import { AuthContext } from "../context/authContext";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { token, setAuthToken } = useContext(AuthContext);

  const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
      console.log("Value stored successfully!");
    } catch (e) {
      console.error("Error storing value:", e);
    }
  };

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert("Error", "Insert email and password");
      return;
    }
    try {
      const response = await axios.post(API_URLS.loginApi, {
        username,
        password,
      });

      if (response.status === 200) {
        const data = response.data;
        if (data.token === undefined) {
          Alert.alert("Invalid login data");
          storeData("userToken", "");
          setAuthToken("");
        } else {
          storeData("userToken", data.token);
          setAuthToken(data.token);
          Alert.alert("Success", "User authenticated");
          setUsername("");
          setPassword("");
        }
      } else {
        const errorData = response.data;
        Alert.alert("Login error", errorData.message || "Login error");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginBox}>
        <Text style={styles.paragraph}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.demoData}>
        <Text style={styles.demoDataP}>Demo Data:</Text>
        <Text style={styles.demoDataP2}>username: mariorossi</Text>
        <Text style={styles.demoDataP2}>password: 12345678</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  loginBox: {
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#ffffff",
    width: "80%",
    height: 240,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  paragraph: {
    padding: 16,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  loginButton: {
    marginTop: 10,
    marginBottom: 10,
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
  demoData: {
    marginTop: 20,
    textAlign: "center",
  },
  demoDataP: {
    marginTop: 1,
    textAlign: "center",
    fontWeight: "bold",
  },
  demoDataP2: {
    marginTop: 1,
  },
});

export default LoginScreen;
