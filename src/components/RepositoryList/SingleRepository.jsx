import { FlatList, View, StyleSheet, Pressable, Alert } from "react-native";
import { format } from "date-fns";
import useRepository from "../../hooks/useRepository";
import RepositoryItem from "./RepositoryItem";
import Text from "../Text";
import theme, { Formstyles as Input } from "../../theme";
import { useNavigate } from "react-router-native";
import useDelete from "../../hooks/useDelete";

const styles = StyleSheet.create({
  round: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: theme.color.primary,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
  },
  container: {
    padding: 10,
    backgroundColor: theme.color.light,
  },
  summary: {
    flexDirection: "row",
    padding: 10,
    gap: 10,
  },
  info: {
    flexShrink: 1,
  },
  separator: {
    gap: 100,
  },
  action: {
    flexDirection: "row",
    gap: 10,
  },
  actionable: {
    flexGrow: 1,
  },
});

const RepositoryInfo = ({ repository }) => {
  // Repository's information implemented in the previous exercise
  return <RepositoryItem item={repository} />;
};

export const ReviewItem = ({ review, refetch }) => {
  const navigate = useNavigate();
  const [deletedReview] = useDelete();
  console.log("ehat is reveiew ", review);
  const { node } = review;
  if (!node) {
    return <Text>You have not made a review yet</Text>;
  }

  const handleDelete = () => {
    console.log("delete here");
    return Alert.alert(
      "Delete Review",
      "Are you sure you want to delete this review?",
      [
        {
          text: "Cancel",
        },
        {
          text: "Delete",
          onPress: async () => {
            await deletedReview(node.id);
            refetch();
          },
        },
      ],
    );
  };
  // Single review item

  return (
    <View style={styles.container}>
      <View style={styles.summary}>
        <View style={styles.round}>
          <Text color="primary" fontWeight="bold">
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
      <View style={styles.action}>
        <Pressable
          style={[Input.button, styles.actionable]}
          onPress={() => navigate(`/repositories/${node.repositoryId}`)}
        >
          <Text color="light">View repository</Text>
        </Pressable>
        <Pressable
          style={[
            Input.button,
            styles.actionable,
            { backgroundColor: theme.color.danger },
          ]}
          onPress={() => handleDelete()}
        >
          <Text color="light">Delete review</Text>
        </Pressable>
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
  const { repository, loading, refetch, fetchMore } = useRepository({
    first: 3,
  });
  console.log("single repo ", repository);
  const reviews = repository?.reviews?.edges ?? [];

  if (loading) {
    return <Text>Fetching repo.....</Text>;
  }
  const onEndReached = () => {
    fetchMore();
  };

  return (
    <FlatList
      style={styles.separator}
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} refetch={refetch} />}
      keyExtractor={({ node }) => node.id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      //   ItemSeparatorComponent={ItemSeparator}
      contentContainerStyle={{ gap: 20 }}
    />
  );
};

export default SingleRepository;
