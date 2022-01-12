import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { SettingScreen } from '../../features/setting/screens/setting.screen';
import { FavouritesScreen } from '../../features/setting/screens/favourites.screen';

const SettingStack = createStackNavigator();

export const SettingNavigator = () => {
    return (
        <SettingStack.Navigator screenOptions={{...TransitionPresets.ModalSlideFromBottomIOS}}>
            <SettingStack.Screen
                name="Settings"
                component={SettingScreen}
            
            />
            <SettingStack.Screen
                name="Favourites"
                component={FavouritesScreen}
            />
        </SettingStack.Navigator>
    )
}