import { useQuery } from "@apollo/client";
// import { useState } from "react";
import { GET_REPOSITORIES } from "../graphql/queries";
// import { useEffect } from "react";

const useRepositories = () => {
  // const [repositories, setRepositories] = useState([]);
  const { data, loading, error, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });
  console.log("data", data);
  console.log("loading", loading);
  console.log("error", error);

  // useEffect(() => {
  //   if (data) {
  //     setRepositories(data.repositories);
  //     // console.log("result in eff ", result);
  //     // console.log("result data ", result.data);
  //     console.log("repositories ", repositories);
  //   }
  // }, []);

  return {
    repositories: data ? data.repositories : [],
    loading: loading,
    refetch: refetch,
  };
};

export default useRepositories;
