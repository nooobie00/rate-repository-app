import { useParams } from "react-router-native";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = () => {
  const id = useParams()?.id ?? undefined;
  //   console.log("cabasa ", id);
  console.log("indies ", id);
  const { data } = useQuery(GET_REPOSITORY, {
    variables: { id },
    skip: !id,
  });
  console.log("dta in ", data);

  return { repository: data ? data.repository : {} };
};

export default useRepository;
