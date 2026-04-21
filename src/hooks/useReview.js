import { useMutation, useApolloClient } from "@apollo/client";
import { REVIEW } from "../graphql/mutations";

const useReview = () => {
  const [mutate, result] = useMutation(REVIEW);
  const client = useApolloClient();

  const createReview = async ({ username, name, rating, review }) => {
    console.log(" vriable, ", username, rating, name, review);
    const response = await mutate({
      variables: {
        ownerName: username,
        rating,
        repositoryName: name,
        text: review,
      },
    });
    client.resetStore();

    return response;
  };
  return [createReview, result];
};

export default useReview;
