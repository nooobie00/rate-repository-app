import { StyleSheet, Pressable } from "react-native";
import { useNavigate } from "react-router-native";

import Text from "../Text";
// import { Link } from "react-router-native";

const styles = StyleSheet.create({
  flexView: {
    flexDirection: "row",
    // alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
});

const AppBarTab = ({ logOut, route, children }) => {
  const navigate = useNavigate();

  const handlePress = () => {
    if (logOut) {
      logOut();
    } else {
      navigate(route);
    }
  };
  // console.log("route, ", route);
  return (
    <Pressable style={styles.flexView} onPress={handlePress}>
      <Text fontSize="subheading" fontWeight="bold" color="light">
        {children}
      </Text>
    </Pressable>
  );
};

export default AppBarTab;
