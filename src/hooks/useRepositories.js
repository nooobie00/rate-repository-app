import { useQuery } from "@apollo/client";
// import { useState } from "react";
import { GET_REPOSITORIES } from "../graphql/queries";
// import { useEffect, useState } from "react";
// import Text from "../components/Text";

const useRepositories = () => {
  const { data, loading, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });
  // console.log("data", data);
  // console.log("loading", loading);
  // console.log("error", error);

  return {
    repositories: data ? data.repositories : [],
    loading: loading,
    refetch: refetch,
  };
};

export default useRepositories;
