import { NativeRouter } from "react-router-native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import Main from "./src/components/Main";
// import Text from "./src/components/Text";

const App = () => {
  const [fontsLoaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto.ttf"),
    Arial: require("./assets/fonts/Arial.ttf"),
    ArialBold: require("./assets/fonts/ArialBold.ttf"),
    RobotoLight: require("./assets/fonts/RobotoLight.ttf"),
    RobotoBold: require("./assets/fonts/RobotoBold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <NativeRouter>
        <Main />
      </NativeRouter>

      <StatusBar style="auto" />
    </>
  );
};

export default App;
