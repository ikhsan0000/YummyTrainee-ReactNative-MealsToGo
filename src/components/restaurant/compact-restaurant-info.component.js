import React from "react";
import { Platform } from "react-native";
import styled from "styled-components/native";
import WebView from "react-native-webview";
import { Text } from "../typography/text.component";

const CompactImage = styled.Image`
  border-radius: 10px;
  height: 100px;
  width: 120px;
`;

const CompactWebView = styled(WebView)`
  border-radius: 30px;
  height: 100px;
  width: 120px;
`;

const Item = styled.View`
border-radius: 20px;
max-width: 120px;
padding: 10px
align-items: center;
`;

const CaptionText = styled(Text)`
margin-top: 10px;
`;


export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  const isAndroid = Platform.OS === "android";
  const Image = isAndroid && isMap ? CompactWebView : CompactImage
  return (
    <>
      <Item>
        <Image source={{ uri: restaurant.photos[0] }} />
        <CaptionText variant="caption">{restaurant.name}</CaptionText>
      </Item>
    </>
  );
};
