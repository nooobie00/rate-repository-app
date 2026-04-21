import { useQuery } from "@apollo/client";
import { GET_USER } from "../graphql/queries";

const useUser = (includeReviews) => {
  console.log("include review ", includeReviews);
  const { data, refetch } = useQuery(GET_USER, {
    variables: { includeReviews: includeReviews },
  });
  console.log(data, " dataa");
  // console.log(" me ", data.me);

  return { user: data ? data.me : {}, refetch };
};

export default useUser;
