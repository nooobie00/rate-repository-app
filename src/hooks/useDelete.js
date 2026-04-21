import { useMutation } from "@apollo/client";
import { DELETE_REVIEW } from "../graphql/mutations";

const useDelete = () => {
  const [mutate, result] = useMutation(DELETE_REVIEW);
  const deletedReview = async (id) => {
    const response = await mutate({
      variables: { id },
    });
    return response;
  };
  return [deletedReview, result];
};

export default useDelete;
