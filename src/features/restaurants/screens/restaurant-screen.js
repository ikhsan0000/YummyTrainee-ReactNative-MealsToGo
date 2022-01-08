import React, {useContext} from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";
import { Searchbar, ActivityIndicator } from "react-native-paper";
import styled from "styled-components/native";
import RestaurantInfoCard from "../components/restaurant-info-components";
import { SafeArea } from "../../../components/safe-area";
import { RestaurantsContext } from "../../../services/restaurant/restaurant.context";

const SearchBarContainer = styled.View`
  background-color: ${(props) => props.theme.colors.ui.tertiary};
  padding: ${(props) => props.theme.space[3]};
`;

const Spinner = styled(ActivityIndicator)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui.tertiary};
  justify-content: center;
  align-items: center;
`;

const RestaurantCardList = styled(FlatList)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui.tertiary};
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantScreen = () => {
  const {restaurants, isLoading, isError} = useContext(RestaurantsContext)
  return (
    <>
      <SearchBarContainer>
        <Searchbar placeholder="Search" />
      </SearchBarContainer>
      {isLoading && (<Spinner animating={true} size='large' color='tomato' />)}
      <RestaurantCardList
        data={restaurants}
        renderItem={({item}) => <RestaurantInfoCard restaurant={item}/>}
        keyExtractor={(item) => item.name}
      />
      <ExpoStatusBar style="auto" />
    </>
  );
};

export default RestaurantScreen;
