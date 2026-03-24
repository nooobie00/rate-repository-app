import { StyleSheet, Pressable, View } from "react-native";

import Text from "./Text";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  flexView: {
    flexDirection: "row",
    // alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
});

const AppBarTab = ({ route, children }) => {
  // console.log("route, ", route);
  return (
    <View style={styles.flexView}>
      <Link to={route} component={Pressable}>
        <Text fontSize="subheading" fontWeight="bold" color="light">
          {children}
        </Text>
      </Link>
    </View>
  );
};

export default AppBarTab;
