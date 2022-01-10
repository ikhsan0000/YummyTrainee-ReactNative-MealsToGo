import { useContext, useState, useEffect } from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import React from "react";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";

const SearchBarContainer = styled.View`
  position: absolute;
  z-index: 2;
  width: 100%;
  top: 10px
  padding-horizontal: 10px
`; 

const SearchComponent = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchBarContainer>
      <Searchbar
        placeholder="Search"
        icon="pin"
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
