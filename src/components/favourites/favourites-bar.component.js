import React, { Component } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import { FadeInView } from "../animations/fade.animation";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";
import { Spacer } from "../spacer/spacer.component";
import { Text } from "../typography/text.component";

const FavouritesWrapper = styled(View)`
  padding-horizontal: 20px;
  background-color: #ed8637;
`;

export const FavouritesBar = ({ favourites, onNavigate }) => {
  return (
    <FavouritesWrapper>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.length === 0 && <Text>Favourites List is Empty!</Text>}
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() => onNavigate("RestaurantDetail", { restaurant })}
              >
                <FadeInView duration={500}>
                  <CompactRestaurantInfo restaurant={restaurant} />
                </FadeInView>
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
