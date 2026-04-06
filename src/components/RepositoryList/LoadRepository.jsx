// import { useParams } from "react-router-native";
import RepositoryItem from "./RepositoryItem";
import useRepository from "../../hooks/useRepository";

const LoadRepository = () => {
  const { repository } = useRepository();
  //   console.log("single repo", repository);

  return <RepositoryItem item={repository} />;
};

export default LoadRepository;
