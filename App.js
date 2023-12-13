import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider, DefaultTheme } from "react-native-paper";
import Navigator from "./router/Navigator";
import BottomBar from "./components/BottomBar";
import ThemeContext from "./context/themeContext";
import { lightTheme, darkTheme } from "./context/themes";

const App = () => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };
  return (
    <>
      <NavigationContainer>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <PaperProvider theme={theme}>
            <Navigator />
            <BottomBar />
          </PaperProvider>
        </ThemeContext.Provider>
      </NavigationContainer>
    </>
  );
};

export default App;
