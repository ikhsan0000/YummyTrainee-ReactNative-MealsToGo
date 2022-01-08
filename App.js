import RestaurantScreen from "./src/features/restaurants/screens/restaurant-screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { Ionicons } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

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
import { RestaurantsContextProvider } from "./src/services/restaurant/restaurant.context";

const Tab = createBottomTabNavigator();

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

  function HomeScreen() {
    return <RestaurantScreen />;
  }

  return (
    <>
      <SafeArea>
        <ThemeProvider theme={theme}>
          <RestaurantsContextProvider>
            <NavigationContainer>
              <Tab.Navigator
                screenOptions={({ route }) => ({
                  tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "Restaurants") {
                      iconName = focused ? "restaurant" : "restaurant-outline";
                    } else if (route.name === "Settings") {
                      iconName = focused ? "settings" : "settings-outline";
                    } else if (route.name === "Map") {
                      iconName = focused ? "map" : "map-outline";
                    }
                    return (
                      <Ionicons name={iconName} size={size} color={color} />
                    );
                  },
                  tabBarActiveTintColor: "tomato",
                  tabBarInactiveTintColor: "gray",
                })}
              >
                <Tab.Screen
                  name="Restaurants"
                  component={HomeScreen}
                  options={{
                    headerShown: false,
                  }}
                />
                <Tab.Screen
                  name="Map"
                  component={HomeScreen}
                  options={{
                    headerShown: false,
                  }}
                />
                <Tab.Screen
                  name="Settings"
                  component={HomeScreen}
                  options={{
                    headerShown: false,
                  }}
                />
              </Tab.Navigator>
            </NavigationContainer>
          </RestaurantsContextProvider>
        </ThemeProvider>
      </SafeArea>
    </>
  );
}
