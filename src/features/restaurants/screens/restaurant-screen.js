import React, { useContext } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components/native";
import RestaurantInfoCard from "../components/restaurant-info-components";
import { SafeArea } from "../../../components/safe-area";
import { RestaurantsContext } from "../../../services/restaurant/restaurant.context";
import SearchComponent from "../components/search.component";

const Spinner = styled(ActivityIndicator)`
  flex: 0.3;
  background-color: ${(props) => props.theme.colors.ui.tertiary};
  justify-content: center;
  align-items: center;
`;

const RestaurantCardList = styled(FlatList)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui.tertiary};
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantScreen = ({ navigation }) => {
  const { restaurants, isLoading, isError } = useContext(RestaurantsContext);
  return (
    <>
      <SearchComponent />
      {isLoading && <Spinner animating={true} size="large" color="tomato" />}
      <RestaurantCardList
        data={restaurants}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('RestaurantDetail', {restaurant: item})}>
            <RestaurantInfoCard restaurant={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
      />
      <ExpoStatusBar style="auto" />
    </>
  );
};

export default RestaurantScreen;
