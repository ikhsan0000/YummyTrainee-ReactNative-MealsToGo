import React, { useState, createContext, useEffect, useContext } from "react";
import { restaurantsRequest, restaurantsTransform } from "./restaurant.service";
import { LocationContext } from "../location/location.context"
export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const {location} = useContext(LocationContext)

  const retriveRestaurants = (loc) => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest(loc)
        .then(restaurantsTransform)
        .then((res) => {
          setIsLoading(false);
          setRestaurants(res);
        })
        .catch((error) => {
          setIsLoading(false);
          setIsError(error);
        });
    }, 2000);
  };

  useEffect(() => {
    if(location)
    {
      const locationFormated = `${location.lat},${location.lng}`
      retriveRestaurants(locationFormated);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants: restaurants,
        isLoading: isLoading,
        isError: isError
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
