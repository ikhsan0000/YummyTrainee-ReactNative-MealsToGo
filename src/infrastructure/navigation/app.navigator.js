import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsNavigator } from "./restaurant.navigator";
import MapScreen from "../../features/map/screens/map-screen";
import { SettingScreen } from "../../features/setting/screens/setting.screen";

import { RestaurantsContextProvider } from "../../services/restaurant/restaurant.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavouriteContextProvider } from "../../services/favourites/favourites.context";
import { SettingNavigator } from "./setting.navigation";
const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <FavouriteContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Restaurants") {
                  iconName = focused ? "restaurant" : "restaurant-outline";
                } else if (route.name === "Settings") {
                  iconName = focused ? "settings" : "settings-outline";
                } else if (route.name === "Map") {
                  iconName = focused ? "map" : "map-outline";
                }
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: "tomato",
              tabBarInactiveTintColor: "gray",
            })}
          >
            <Tab.Screen
              name="Restaurants"
              component={RestaurantsNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Tab.Screen
              name="Map"
              component={MapScreen}
              options={{
                headerShown: false,
              }}
            />
            <Tab.Screen
              name="Settings"
              component={SettingNavigator}
              options={{
                headerShown: false,
              }}
            />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavouriteContextProvider>
  );
};
