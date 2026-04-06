import { NativeRouter } from "react-router-native";
import { ApolloProvider } from "@apollo/client/react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import Constants from "expo-constants";

import Main from "./src/components/Main";
import AuthStorage from "./src/utils/authStorage";
import AuthStorageContext from "./src/contexts/AuthStorageContext";
import createApolloClient from "./src/utils/apolloClient";

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

const App = () => {
  const [fontsLoaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto.ttf"),
    Arial: require("./assets/fonts/Arial.ttf"),
    ArialBold: require("./assets/fonts/ArialBold.ttf"),
    RobotoBold: require("./assets/fonts/RobotoBold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  console.log("constants config", Constants.expoConfig);
  return (
    <>
      <NativeRouter
        future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
      >
        <ApolloProvider client={apolloClient}>
          <AuthStorageContext.Provider value={authStorage}>
            <Main />
          </AuthStorageContext.Provider>
        </ApolloProvider>
      </NativeRouter>

      <StatusBar style="auto" />
    </>
  );
};

export default App;
