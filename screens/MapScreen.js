import React, { useEffect, useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
import { useLocation } from "@react-navigation/native";
import { PermissionsAndroid, Platform } from "react-native";

const handleGetLocation = () => {
  if (hasPermission) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition(pos);
      },
      (error) => {
        console.error("Error getting location:", error);
      }
    );
  } else {
    console.warn("Location permission not granted");
  }
};

const MapScreen = () => {
  const [position, setPosition] = useState(null);

  const navigation = useNavigation();

  const [hasPermission, setHasPermission] = useState(false);

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === "android") {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Location Permission",
            message: "App needs access to your location",
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          setHasPermission(true);
        }
      } else {
        // Handle iOS permission request if needed
      }
    };

    requestLocationPermission();
  }, []);
  /*
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setRegion(position);
    });


  }, []);
*/

  /*
  const handleNavigate = () => {
    navigation.navigate('Details', {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  };

*/

  /*
  useEffect(() => {
    const { coords } = useLocation();

    const latitude = coords?.latitude;
    const longitude = coords?.longitude;
  }, []);
*/
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: position?.coords.latitude,
          longitude: position?.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {position && (
          <Marker
            coordinate={{
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            }}
            title="La tua posizione"
          />
        )}
      </MapView>
      <Button title="Ottieni posizione" onPress={handleGetLocation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapScreen;
