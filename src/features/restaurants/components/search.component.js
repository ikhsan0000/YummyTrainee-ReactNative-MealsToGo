import { useContext, useState, useEffect } from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import React from "react";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";
const SearchBarContainer = styled.View`
  background-color: ${(props) => props.theme.colors.ui.tertiary};
  padding: ${(props) => props.theme.space[3]};
`;

const SearchComponent = ({isFavouriteToggled, onFavouriteToggle}) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchBarContainer>
      <Searchbar
      icon={ isFavouriteToggled ? "heart" : "heart-outline"}
      onIconPress={onFavouriteToggle}
        placeholder="Search Place"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchBarContainer>
  );
};

export default SearchComponent;
