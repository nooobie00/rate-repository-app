import { View, StyleSheet } from "react-native";
import { Route, Routes, Navigate } from "react-router-native";

import SignIn from "./SignIn";
import RepositoryList from "./RepositoryList";
// import RepositoryItem from "./RepositoryList/RepositoryItem";
// import LoadRepository from "./RepositoryList/LoadRepository";
import SingleRepository from "./RepositoryList/SingleRepository";
import AppBar from "./AppBar";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    // padding: 10,
    flex: 1,
    backgroundColor: theme.color.background,
  },
});
const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />

      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/repositories/:id" element={<SingleRepository />} />
        {/* <Route
          path="/repositories/:id"
          element={<RepositoryItem item={{}} />}
        /> */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
