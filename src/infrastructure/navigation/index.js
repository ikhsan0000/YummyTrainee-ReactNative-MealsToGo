import { NavigationContainer } from "@react-navigation/native";
import React, { Component, useContext } from "react";
import { Text, View } from "react-native";
import { AuthenticationContext } from "../authentication/authentication.context";
import { AccountNavigator } from "./account.navigator";
import { AppNavigator } from "./app.navigator";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
