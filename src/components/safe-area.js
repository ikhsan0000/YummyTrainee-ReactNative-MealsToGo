import { StatusBar, SafeAreaView} from "react-native";
import styled from "styled-components/native";


export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
  padding-top: ${StatusBar.currentHeight}px;
  overflow: visible;
`;
