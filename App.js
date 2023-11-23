import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider, DefaultTheme } from "react-native-paper";
import Navigator from "./router/Navigator";
import BottomBar from "./components/BottomBar";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#336699",
  },
};

const App = () => {
  return (
    <>
      <NavigationContainer>
        <PaperProvider theme={theme}>
          <Navigator />
          <BottomBar />
        </PaperProvider>
      </NavigationContainer>
    </>
  );
};

export default App;
