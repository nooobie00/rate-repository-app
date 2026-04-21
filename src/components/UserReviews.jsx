import { useState } from "react";
import useUser from "../hooks/useUser";
import { ReviewItem } from "./RepositoryList/SingleRepository";
import { FlatList } from "react-native";

const UserReview = () => {
  const [includeReviews, setIncludeReviews] = useState(true);
  console.log("includeReviews sata ", includeReviews);
  const { user, refetch } = useUser(includeReviews);
  console.log("user log", user);
  const reviews = user?.reviews?.edges ?? [];
  console.log("reviews   ))", reviews);

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} refetch={refetch} />}
      keyExtractor={({ node }) => node.id}
      contentContainerStyle={{ gap: 20 }}
    />
  );
};

export default UserReview;
