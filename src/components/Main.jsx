import { View, StyleSheet } from "react-native";
import { Route, Routes, Navigate } from "react-router-native";

import SignIn from "./SignIn";
import RepositoryList from "./RepositoryList";
import Review from "./Review";
import SignUp from "./SignUp";
import SingleRepository, {
  ReviewItem,
} from "./RepositoryList/SingleRepository";
import AppBar from "./AppBar";
import theme from "../theme";
import UserReview from "./UserReviews";

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
        <Route path="/signup" element={<SignUp />} />
        <Route path="/repositories/:id" element={<SingleRepository />} />
        <Route path="/review" element={<Review />} />
        <Route path="/myReviews" element={<UserReview />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
