import { useParams } from "react-router-native";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = (variable) => {
  const id = useParams()?.id ?? undefined;
  //   console.log("cabasa ", id);
  console.log("indies ", id);
  variable = { ...variable, id: id };
  const { data, refetch, loading, fetchMore } = useQuery(GET_REPOSITORY, {
    fetchPolicy: "cache-and-network",
    variables: variable,
    skip: !id,
  });
  console.log("dta in ", data);

  const handleFetchMore = () => {
    console.log("getting rrevieews ", data?.repository?.reviews);
    const hasNextPage =
      !loading && data?.repository?.reviews.pageInfo.hasNextPage;

    if (!hasNextPage) {
      return;
    }
    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variable,
      },
    });
  };

  return {
    repository: data ? data.repository : {},
    refetch,
    fetchMore: handleFetchMore,
  };
};

export default useRepository;
