import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import RestaurantInfoCard from "../components/restaurant-info-components";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
  padding-top: ${StatusBar.currentHeight}px;
`;

const SearchBarContainer = styled.View`
  background-color: ${(props) => props.theme.colors.ui.primary};
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantCardList = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui.secondary};
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantScreen = () => {
  return (
    <>
      <SafeArea>
        <SearchBarContainer>
          <Searchbar placeholder="Search" />
        </SearchBarContainer>

        <RestaurantCardList>
          <RestaurantInfoCard />
        </RestaurantCardList>
      </SafeArea>
      <ExpoStatusBar style="auto" />
    </>
  );
};

export default RestaurantScreen;

