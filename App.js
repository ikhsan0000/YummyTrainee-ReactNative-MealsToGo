import React, { useState, useEffect } from "react";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { initializeApp } from "firebase/app";

import {
  useFonts as usePoppins,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import {
  useFonts as useInter,
  Inter_400Regular,
} from "@expo-google-fonts/inter";
import { SafeArea } from "./src/components/safe-area";
import { restaurantsRequest } from "./src/services/restaurant/restaurant.service";

import { Navigation } from "./src/infrastructure/navigation";
import { AuthenticationContextProvider } from "./src/infrastructure/authentication/authentication.context";

export default function App() {

  const [poppinsLoaded] = usePoppins({
    Poppins_400Regular,
    Poppins_700Bold,
  });
  const [interLoaded] = useInter({
    Inter_400Regular,
  });

  if (!poppinsLoaded || !interLoaded) {
    return null;
  }

  return (
    <>
      <SafeArea>
        <ThemeProvider theme={theme}>
          <AuthenticationContextProvider>
  
                  <Navigation />
           
          </AuthenticationContextProvider>
        </ThemeProvider>
      </SafeArea>
    </>
  );
}
