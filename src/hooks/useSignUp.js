import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutations";
import { useApolloClient } from "@apollo/client";
import useSignIn from "./useSignIn";

const useSignUp = () => {
  const [mutate, result] = useMutation(CREATE_USER);
  const apolloClient = useApolloClient();

  const signUp = async ({ username, password }) => {
    const { data } = await mutate({
      variables: {
        username,
        password,
      },
    });

    apolloClient.resetStore();
    return data;
  };

  return [signUp, result];
};

export default useSignUp;
