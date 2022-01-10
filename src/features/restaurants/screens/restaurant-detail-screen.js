import React from "react";
import RestaurantInfoCard from "../components/restaurant-info-components";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";

const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  return (
    <>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Section>
          <List.Accordion
            title="Food"
            theme={{ colors: { primary: 'tomato' }}}
            left={(props) => (
              <List.Icon {...props} icon="silverware-fork-knife" />
            )}
          >
            <List.Item title="Fried Rice" />
            <List.Item title="Ramen" />
          </List.Accordion>

          <List.Accordion
            title="Drinks"
            theme={{ colors: { primary: 'tomato' }}}
            left={(props) => <List.Icon {...props} icon="cup" />}
          >
            <List.Item title="Mineral Water" />
            <List.Item title="Cola" />
          </List.Accordion>

          <List.Accordion
            title="Desert"
            theme={{ colors: { primary: 'tomato' }}}
            left={(props) => <List.Icon {...props} icon="ice-cream" />}
          >
            <List.Item title="Sunday" />
            <List.Item title="Pan Cake" />
          </List.Accordion>
        </List.Section>
      </ScrollView>
    </>
  );
};

export default RestaurantDetailScreen;
