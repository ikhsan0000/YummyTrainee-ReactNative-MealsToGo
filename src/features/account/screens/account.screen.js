import React from "react";
import { View } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import LottieView from "lottie-react-native";

import {
  AccountButton,
  AccountContainer,
  AccountCover,
  AccountScreenBackground,
  AnimationWrapper,
  BackgroundWrapper,
  Title,
} from "../components/account.style";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountScreenBackground>
      <AccountCover />
      <AnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../../assets/watermelon.json")}
        />
      </AnimationWrapper>
      <Title variant="title">Meals To Go</Title>
      <AccountContainer>
        <AccountButton
          icon="lock-open-outline"
          mode="contained"
          color="tomato"
          dark
          onPress={() => navigation.navigate("Login")}
        >
          login
        </AccountButton>
        <Spacer position="top" size="xl" />
        <AccountButton
          icon="account"
          mode="contained"
          color="tomato"
          dark
          onPress={() => navigation.navigate("Register")}
        >
          register
        </AccountButton>
      </AccountContainer>
    </AccountScreenBackground>
  );
};
