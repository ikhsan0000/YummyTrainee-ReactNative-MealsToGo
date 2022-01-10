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

const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({ restaurant }) => {
  const Image = isAndroid ? CompactWebView : CompactImage
  return (
    <>
      <Item>
        <Image source={{ uri: restaurant.photos[0] }} />
        <Text variants="caption">{restaurant.name}</Text>
      </Item>
    </>
  );
};
