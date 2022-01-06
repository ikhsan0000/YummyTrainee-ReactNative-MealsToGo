import RestaurantScreen from "./src/features/restaurants/screens/restaurant-screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from './src/infrastructure/theme';

import{
  useFonts as usePoppins,
  Poppins_400Regular,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins'
import{
  useFonts as useInter,
  Inter_400Regular,
} from '@expo-google-fonts/inter'
 
export default function App() {

  const [poppinsLoaded] = usePoppins({
    Poppins_400Regular,
    Poppins_700Bold,
  })
  const [interLoaded] = useInter({
    Inter_400Regular,
  })

  if(!poppinsLoaded || !interLoaded) {
    return null
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantScreen />
      </ThemeProvider>
    </>
  );
}
