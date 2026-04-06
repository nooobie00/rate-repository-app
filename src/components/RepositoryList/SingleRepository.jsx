import { FlatList, View, StyleSheet } from "react-native";
import { format } from "date-fns";
import useRepository from "../../hooks/useRepository";
import RepositoryItem from "./RepositoryItem";
import Text from "../Text";
import theme from "../../theme";

const styles = StyleSheet.create({
  round: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: theme.color.primary,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 4,
  },
  container: {
    // padding: 20,
  },
  summary: {
    flexDirection: "row",
    backgroundColor: theme.color.light,
    padding: 10,
    gap: 10,
  },
  info: {
    flexShrink: 1,
  },
  separator: {
    gap: 100,
  },
});

const RepositoryInfo = ({ repository }) => {
  // Repository's information implemented in the previous exercise
  return <RepositoryItem item={repository} />;
};

const ReviewItem = ({ review }) => {
  // Single review item
  const { node } = review;
  return (
    <View style={styles.container}>
      <View style={styles.summary}>
        <View style={styles.round}>
          <Text color="primary" fontWeight="bold" fontSize="subheading">
            {node.rating}
          </Text>
        </View>
        <View style={styles.info}>
          <Text fontSize="subheading" fontWeight="bold">
            {node.user.username}
          </Text>
          <Text>{format(node.createdAt, "dd.MM.yyyy")}</Text>
          <Text>{node.text}</Text>
        </View>
      </View>
    </View>
  );
};

// const ItemSeparator = () => <View style={styles.separator} />;

const SingleRepository = () => {
  // fetch repository for the current rpository based on the id in the params
  // fetch review for the repo we found
  //
  // ...
  const { repository } = useRepository();
  console.log("single repo ", repository);
  const reviews = repository?.reviews?.edges ?? [];

  return (
    <FlatList
      style={styles.separator}
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} key={item.id} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      //   ItemSeparatorComponent={ItemSeparator}
      contentContainerStyle={{ gap: 20 }}
    />
  );
};

export default SingleRepository;
