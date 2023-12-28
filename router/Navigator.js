import React, { useState, useRef } from "react";
import { DrawerLayoutAndroid } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation, Button, Text, View } from "@react-navigation/native";
import Appbar from "../components/Appbar";
import HomeScreen from "../screens/HomeScreen";
import TextPageScreen from "../screens/TextPageScreen";
import ProductsScreen from "../screens/ProductsScreen";
import ProductsScreen2 from "../screens/ProductsScreen2";
import ProductsScreen3 from "../screens/ProductsScreen3";
import ProductsScreen4 from "../screens/ProductsScreen4";
import ProductScreen from "../screens/ProductScreen";
import MapScreen from "../screens/MapScreen";
import MenuScreen from "../screens/MenuScreen";
import ProtectedScreen from "../screens/ProtectedScreen";
import FormScreen from "../screens/FormScreen";
import GalleryScreen from "../screens/GalleryScreen";
import ThemeScreen from "../screens/ThemeScreen";
import LoginScreen from "../screens/LoginScreen";
import ChatScreen from "../screens/ChatScreen";
import SideMenu from "../components/SideMenu";

const Stack = createStackNavigator();

const Navigator = () => {
  const drawer = useRef(null);
  const navigation = useNavigation();

  const openDrawer = () => {
    if (drawer.current) {
      drawer.current.openDrawer();
    }
  };

  const closeDrawer = () => {
    if (drawer.current) {
      drawer.current.closeDrawer();
    }
  };

  const Drawer = () => {
    return (
      <>
        <SideMenu navigation={navigation} closeDrawer={closeDrawer} />
      </>
    );
  };
  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={"left"}
      renderNavigationView={Drawer}
    >
      <Appbar openDrawer={openDrawer}></Appbar>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TextPage"
          component={TextPageScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Products2"
          component={ProductsScreen2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Products3"
          component={ProductsScreen3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Products4"
          component={ProductsScreen4}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Product"
          component={ProductScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProtectedPage"
          component={ProtectedScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Form"
          component={FormScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Map"
          component={MapScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Gallery"
          component={GalleryScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Theme"
          component={ThemeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </DrawerLayoutAndroid>
  );
};

export default Navigator;
