import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.ui.tertiary};
  elevation: 5;
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body}
  font-size: ${(props) => props.theme.fontSizes.caption}
  `;

export const FlexRowContainer = styled(View)`
  flex-direction: row;
`;
export const FlexEnd = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const Rating = styled(View)`
  flex-direction: row;
  align-items: center;
  padding-vertical: ${(props) => props.theme.space[1]};
`;
