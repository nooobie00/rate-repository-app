import { View, StyleSheet, ScrollView } from "react-native";
import { useQuery } from "@apollo/client";
import { useApolloClient } from "@apollo/client";
import Constants from "expo-constants";

import { GET_USER } from "../../graphql/queries";
import useAuthStorage from "../../hooks/useAuthStorage";
import theme from "../../theme";
import AppBarTab from "./AppBarTab";
import { useNavigate } from "react-router-native";

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
  const { data, loading } = useQuery(GET_USER);
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();
  const navigate = useNavigate();

  if (loading) {
    return null;
  }
  console.log("daata for user ", data);
  console.log("daata for user value ", data.me);
  // const activity = data.me ? "Log out" : "";
  const signOut = async () => {
    console.log("logging out...");
    await authStorage.removeAccessToken();
    navigate("/");
    apolloClient.resetStore();
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab route={"/"}>Repositories</AppBarTab>
        {data.me ? (
          <>
            <AppBarTab route="/review">Create a review</AppBarTab>
            <AppBarTab route="/myReviews">My reviews</AppBarTab>
            <AppBarTab route="#" logOut={signOut}>
              Sign out
            </AppBarTab>
          </>
        ) : (
          <>
            <AppBarTab route={"/signin"}>Sign in</AppBarTab>
            <AppBarTab route={"/signup"}>Sign up</AppBarTab>
          </>
        )}
      </ScrollView>

      {/* <AppBarTab>Home</AppBarTab> */}
    </View>
  );
};

export default AppBar;
