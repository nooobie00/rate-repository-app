import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";

import theme from "../theme";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    display: "flex",
    flexDirection: "row",
    backgroundColor: theme.color.fade,
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 24,
    paddingHorizontal: 16,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab route={"/"}>Repositories</AppBarTab>
        <AppBarTab route={"/signin"}>Sign in</AppBarTab>
      </ScrollView>

      {/* <AppBarTab>Home</AppBarTab> */}
    </View>
  );
};

export default AppBar;
