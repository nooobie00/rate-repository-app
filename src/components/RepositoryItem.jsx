import { View, StyleSheet, Image } from "react-native";

import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.color.light,
    padding: 20,
    display: "flex",
    gap: 20,
    // fontSize: theme.fontSize.body,
  },
  dp: {
    width: 50,
    height: 50,
  },
  basicContainer: {
    flexDirection: "row",
    gap: 40,
  },
  basicInfo: {
    flexShrink: 1,
    gap: 5,
  },
  metricsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    // alignSelf: "center",
  },
  metricsItem: {
    alignSelf: "center",
  },
  button: {
    backgroundColor: theme.color.primary,
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 5,
  },
});

const fomatNumber = (num) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0/, "") + "k";
  }
  return num;
};
const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.basicContainer}>
        <Image style={styles.dp} source={require("../../assets/favicon.png")} />
        <View style={styles.basicInfo}>
          <Text fontWeight="bold" fontSize="subheading">
            {item.fullName}
          </Text>
          <Text>{item.description}</Text>
          <View style={styles.button}>
            <Text color="light">{item.language}</Text>
          </View>
        </View>
      </View>

      <View style={styles.metricsContainer}>
        <View>
          <Text
            fontSize="subheading"
            fontWeight="bold"
            style={styles.metricsItem}
          >
            {fomatNumber(item.stargazersCount)}
          </Text>
          <Text>Stars</Text>
        </View>
        <View>
          <Text
            fontSize="subheading"
            fontWeight="bold"
            style={styles.metricsItem}
          >
            {fomatNumber(item.forksCount)}
          </Text>
          <Text>Forks</Text>
        </View>
        <View>
          <Text
            fontSize="subheading"
            fontWeight="bold"
            style={styles.metricsItem}
          >
            {fomatNumber(item.reviewCount)}
          </Text>
          <Text>Reviews</Text>
        </View>
        <View>
          <Text
            fontSize="subheading"
            fontWeight="bold"
            style={styles.metricsItem}
          >
            {fomatNumber(item.ratingAverage)}
          </Text>
          <Text>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
