import { FlatList, View, StyleSheet, Pressable } from "react-native";
import { Component } from "react";
import { useDebounce } from "use-debounce";
import { Searchbar } from "react-native-paper";
import { useNavigate } from "react-router-native";
import useRepositories from "../../hooks/useRepositories";
import { Picker } from "@react-native-picker/picker";
import RepositoryItem from "./RepositoryItem";
import { useState } from "react";

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
});

// const repositoriesOffline = [
//   {
//     id: "jaredpalmer.formik",
//     fullName: "jaredpalmer/formik",
//     description: "Build forms in React, without the tears",
//     language: "TypeScript",
//     forksCount: 1589,
//     stargazersCount: 21553,
//     ratingAverage: 88,
//     reviewCount: 4,
//     ownerAvatarUrl: "https://avatars2.githubusercontent.com/u/4060187?v=4",
//   },
//   {
//     id: "rails.rails",
//     fullName: "rails/rails",
//     description: "Ruby on Rails",
//     language: "Ruby",
//     forksCount: 18349,
//     stargazersCount: 45377,
//     ratingAverage: 100,
//     reviewCount: 2,
//     ownerAvatarUrl: "https://avatars1.githubusercontent.com/u/4223?v=4",
//   },
//   {
//     id: "django.django",
//     fullName: "django/django",
//     description: "The Web framework for perfectionists with deadlines.",
//     language: "Python",
//     forksCount: 21015,
//     stargazersCount: 48496,
//     ratingAverage: 73,
//     reviewCount: 5,
//     ownerAvatarUrl: "https://avatars2.githubusercontent.com/u/27804?v=4",
//   },
//   {
//     id: "reduxjs.redux",
//     fullName: "reduxjs/redux",
//     description: "Predictable state container for JavaScript apps",
//     language: "TypeScript",
//     forksCount: 13902,
//     stargazersCount: 52869,
//     ratingAverage: 0,
//     reviewCount: 0,
//     ownerAvatarUrl: "https://avatars3.githubusercontent.com/u/13142323?v=4",
//   },
// ];

// const ItemSeparator = () => <View style={styles.separator} />;

const SortPicker = ({ sort, setSort }) => {
  return (
    <Picker
      selectedValue={sort}
      onValueChange={(itemValue, itemIndex) => setSort(itemValue)}
    >
      <Picker.Item
        label="Sort By...."
        enabled={false}
        style={{ color: "gray" }}
      />
      <Picker.Item
        label="Latest repositories"
        value="lp"
        style={{ color: "black" }}
      />
      <Picker.Item
        label="Highest rated repositories"
        value="hrp"
        style={{ color: "black" }}
      />
      <Picker.Item
        label="Lowest rated repositories"
        value="lrp"
        style={{ color: "black" }}
      />
    </Picker>
  );
};

const FilterSearch = ({ filter, setFilter }) => {
  return (
    <Searchbar
      placeholder="Find Repository"
      onChangeText={setFilter}
      value={filter}
    />
  );
};

const RepositoryListHeader = ({ sort, setSort, filter, setFilter }) => {
  return (
    <View>
      <FilterSearch filter={filter} setFilter={setFilter} />
      <SortPicker sort={sort} setSort={setSort} />
    </View>
  );
};

export class RepositoryListContainer extends Component {
  RendeHeader = () => {
    const props = this.props;
    console.log("props  in", props);

    return (
      <RepositoryListHeader
        sort={props.sort}
        setSort={props.setSort}
        filter={props.filter}
        setFilter={props.setFilter}
      />
    );
  };

  render() {
    const { repositories, navigate, onEndReached } = this.props;
    console.log("repositories render ", repositories);
    const repositoryNodes = repositories.edges
      ? repositories.edges?.map((edge) => edge.node)
      : [];
    console.log("repo ", this.props);
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={repositoryNodes}
          renderItem={({ item }) => (
            <Pressable onPress={() => navigate(`/repositories/${item.id}`)}>
              <RepositoryItem item={item} />
            </Pressable>
          )}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.5}
          ListHeaderComponent={this.RendeHeader}
          extraData={({ item }) => item.id}
          contentContainerStyle={styles.container}
        />
      </View>
    );
  }
}

const RepositoryList = () => {
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");
  const [debouncedValue] = useDebounce(filter, 500);
  const navigate = useNavigate();
  const { repositories, fetchMore } = useRepositories({
    sort: sort,
    debouncedValue: debouncedValue,
    first: 8,
  });
  console.log("whats arre the repo", repositories);
  console.log("filter sort", filter, sort);

  const onEndReached = () => {
    fetchMore();
  };

  return (
    <RepositoryListContainer
      repositories={repositories}
      sort={sort}
      setSort={setSort}
      filter={filter}
      setFilter={setFilter}
      onEndReached={onEndReached}
      navigate={navigate}
    />
  );
};

export default RepositoryList;
