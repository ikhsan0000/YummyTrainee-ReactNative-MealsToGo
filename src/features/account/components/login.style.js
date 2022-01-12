import React from "react";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";
import { ImageBackground, View } from "react-native";
import { colors } from "../../../infrastructure/theme/colors";
import { Button, TextInput } from "react-native-paper";

export const BackgroundWrapper = styled(View)`
  flex: 1;
`;

export const LoginScreenBackground = styled(ImageBackground).attrs((props) => ({
  source: {
    uri: "https://media.istockphoto.com/vectors/seamless-pattern-food-vector-id165073965?b=1&k=20&m=165073965&s=612x612&w=0&h=G9pDFbUdFeosDqja_4fs7N5N0D3GPsagL0y7QAn9yFU=",
  },
}))`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LoginCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const LoginContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.4);
  height: auto;
  width: 90%;
  padding: 25px;
  margin: 10px;
  border-radius: 20px;
`;

export const LoginButton = styled(Button)`
  padding: 10px;
`;

export const LoginInput = styled(TextInput)`
  background-color: rgba(240, 240, 240, 0.85);
`;

export const Title = styled(Text)`
  font-size: 40px;
  color: white;
`