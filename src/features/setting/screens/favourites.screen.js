import React, { useContext, useState } from "react";
import { View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { List, Avatar } from "react-native-paper";

import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { colors } from "../../../infrastructure/theme/colors";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { RestaurantCardList } from "../../restaurants/screens/restaurant-screen";
import { RestaurantsContext } from "../../../services/restaurant/restaurant.context";
import RestaurantInfoCard from "../../restaurants/components/restaurant-info-components";

const NoFavouritesArea = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-align-vertical: center;
`;
const FavouritesArea = styled(View)`
  flex: 1;
  justify-content: center;
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  //   const { restaurants } = useContext(RestaurantsContext)

  return favourites.length ? (
    <FavouritesArea>
      <RestaurantCardList
        data={favourites}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("RestaurantDetail", { restaurant: item })
            }
          >
            <RestaurantInfoCard restaurant={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
      />
    </FavouritesArea>
  ) : (
    <NoFavouritesArea>
      <Text>No Favourites Yet !</Text>
    </NoFavouritesArea>
  );
};
