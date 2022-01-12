import React, { Component, useState, useContext } from "react";
import { TextInput, View } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../infrastructure/authentication/authentication.context";
import { ActivityIndicator, Colors } from 'react-native-paper';
import { Text } from "../../../components/typography/text.component";


import {
  LoginContainer,
  LoginCover,
  LoginInput,
  LoginScreenBackground,
  LoginButton,
  Title,
} from "../components/login.style";

export const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { onLogin, isLoading, error } = useContext(AuthenticationContext)
    
  return (
    <LoginScreenBackground>
      <LoginCover />
      <Title variant='title'>Login</Title>
      <LoginContainer>
        <LoginInput
          label="Email"
          selectionColor="tomato"
          underlineColor="tomato"
          activeUnderlineColor="tomato"
          textContentType="emailAddress"
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
          value={email}
          />
        <Spacer position="top" size="xl" />
        <LoginInput
          label="Password"
          selectionColor="tomato"
          underlineColor="tomato"
          activeUnderlineColor="tomato"
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
          value={password}
          />
        <Spacer position = "top" size="medium" ></Spacer>

        {error && <Text variant='error'>{error.replace('FirebaseError: Firebase: ', '').replace('.','')}</Text>}
        
        <Spacer position="top" size="xl" />

        {isLoading ? (
          <ActivityIndicator animating={true} color='white' size='large' />
        )  : (
          <LoginButton
          icon="lock-open-outline"
          mode="contained"
          color="tomato"
          dark
          onPress={() => onLogin(email, password)}
        >
          Login
        </LoginButton>
        )}
        
        </LoginContainer>

      <Spacer position="top" size="large" />

      {/* back button */}
      <LoginButton icon="chevron-left" mode="contained" color="tomato" dark onPress={() => navigation.goBack()} >Back</LoginButton>
    </LoginScreenBackground>
  );
};
