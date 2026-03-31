import { useMutation } from "@apollo/client";
import { useApolloClient } from "@apollo/client";

import { SIGN_IN } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";

const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
    console.log("signIn called with", { username, password });
    const response = await mutate({
      variables: {
        username,
        password,
      },
    });

    console.log("response in signIn", response);
    // console.log(
    //   "response access token",
    //   response.data.authenticate.accessToken,
    // );
    authStorage.setAccessToken(response.data.authenticate.accessToken);
    apolloClient.resetStore();
    return response;
  };

  return [signIn, result];
};

export default useSignIn;
