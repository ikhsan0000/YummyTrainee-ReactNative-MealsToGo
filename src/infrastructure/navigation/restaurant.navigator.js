import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import RestaurantScreen from '../../features/restaurants/screens/restaurant-screen';
import RestaurantDetailScreen from '../../features/restaurants/screens/restaurant-detail-screen';

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
    return (
        <RestaurantStack.Navigator screenOptions={{...TransitionPresets.ModalPresentationIOS}}>
            <RestaurantStack.Screen
                name="Restaurants"
                component={RestaurantScreen}
                options={{
                    headerShown: false
                  }}
            />
            <RestaurantStack.Screen
                name="RestaurantDetail"
                component={RestaurantDetailScreen}
                options={{
                    headerShown: false
                  }}
            />
        </RestaurantStack.Navigator>
    )
}