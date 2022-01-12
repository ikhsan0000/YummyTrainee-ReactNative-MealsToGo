import React, { useState, useContext } from "react";
import { View } from "react-native";
import {
  AccountCover,
  AccountScreenBackground,
  BackgroundWrapper,
} from "../components/account.style";
import { AuthenticationContext } from "../../../infrastructure/authentication/authentication.context";
import { Spacer } from "../../../components/spacer/spacer.component";
import { ActivityIndicator, Colors } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";

import {
  RegisterContainer,
  RegisterCover,
  RegisterInput,
  RegisterScreenBackground,
  RegisterButton,
  Title,
} from "../components/register.style";

export const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { onRegister, isLoading, error } = useContext(AuthenticationContext);

  return (
    <RegisterScreenBackground>
      <RegisterCover />
      <Title variant="title">Register</Title>
      <RegisterContainer>
        <RegisterInput
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
        <RegisterInput
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
        <Spacer position="top" size="xl" />
        <RegisterInput
          label="Password Confirm"
          selectionColor="tomato"
          underlineColor="tomato"
          activeUnderlineColor="tomato"
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
        />
        <Spacer position="top" size="medium"></Spacer>

        {error && (
          <Text variant="error">
            {error.replace("FirebaseError: Firebase: ", "").replace(".", "")}
          </Text>
        )}

        <Spacer position="top" size="xl" />

        {isLoading ? (
          <ActivityIndicator animating={true} color="white" size="large" />
        ) : (
          <RegisterButton
            icon="lock-open-outline"
            mode="contained"
            color="tomato"
            dark
            onPress={() => onRegister(email, password, confirmPassword)}
          >
            Register
          </RegisterButton>
        )}
      </RegisterContainer>

      <Spacer position="top" size="large" />

      {/* back button */}
      <RegisterButton
        icon="chevron-left"
        mode="contained"
        color="tomato"
        dark
        onPress={() => navigation.goBack()}
      >
        Back
      </RegisterButton>
    </RegisterScreenBackground>
  );
};
