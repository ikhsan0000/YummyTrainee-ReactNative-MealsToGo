import React, { useState, createContext, useEffect, useMemo } from "react";
import { restaurantsRequest, restaurantsTransform } from "./restaurant.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const retriveRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest()
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
    retriveRestaurants();
  }, []);

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
