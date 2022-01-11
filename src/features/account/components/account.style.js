import React from "react";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";
import { ImageBackground, View } from "react-native";

export const BackgroundWrapper = styled(View)`
  flex: 1;
`;

export const AccountScreenBackground = styled(ImageBackground).attrs(
  props => ({
    source: {uri: "https://media.istockphoto.com/vectors/seamless-pattern-food-vector-id165073965?b=1&k=20&m=165073965&s=612x612&w=0&h=G9pDFbUdFeosDqja_4fs7N5N0D3GPsagL0y7QAn9yFU="}
  })
)`
  flex: 1;
  justify-content: center;
`;

