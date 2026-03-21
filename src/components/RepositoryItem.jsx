import { View, Text } from "react-native";

const RepositoryItem = ({ item }) => {
  return (
    <View key={item.id}>
      {Object.keys(item).map((key) => {
        return (
          <Text key={key}>
            {key}: {item[key]}
          </Text>
        );
      })}
    </View>
  );
};

export default RepositoryItem;
