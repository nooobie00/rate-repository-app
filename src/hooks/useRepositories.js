import { useQuery } from "@apollo/client";
// import { useState } from "react";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = (variable) => {
  // console.log("sort ", sort);
  variable =
    variable.sort === "lp" || variable.sort === ""
      ? { ...variable, order: "CREATED_AT" }
      : variable.sort === "hrp"
        ? { ...variable, order: "RATING_AVERAGE", direction: "DESC" }
        : { ...variable, order: "RATING_AVERAGE", direction: "ASC" };

  variable = variable.debouncedValue
    ? { ...variable, keyword: variable.debouncedValue }
    : variable;
  console.log("var obj", variable);

  const { data, loading, refetch, fetchMore, ...result } = useQuery(
    GET_REPOSITORIES,
    {
      fetchPolicy: "cache-and-network",
      variables: variable,
    },
  );

  const handleFetchMore = () => {
    const canFectchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFectchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variable,
      },
    });

    // return {
    //   repositories: data?.repositories,
    //   fetchMore: handleFetchMore,
    //   loading,
    //   ...result,
    // };
  };

  // console.log("data", data);
  // console.log("loading", loading);
  // console.log("error", error);

  return {
    repositories: data ? data.repositories : [],
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };
};

export default useRepositories;
