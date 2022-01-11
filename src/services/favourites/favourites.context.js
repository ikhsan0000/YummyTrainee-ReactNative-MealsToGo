import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavouritesContext = createContext();

export const FavouriteContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  
  const add = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  const remove = (restaurant) => {
    const newFavourites = favourites.filter(
      (x) => x.placeId !== restaurant.placeId
    );
    setFavourites(newFavourites);
  };

  const saveFavourites = async (value) => {
    try{
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@favourites", jsonValue);
    } catch (err) {
      console.log("error saving "+err)
    }
  }

  const loadFavourites = async () => {
    try {
      const value = await AsyncStorage.getItem("@favourites");
      if(value !== null){
        setFavourites(JSON.parse(value));
      } 
    }catch(err){
        console.log("error loading "+err);
    }
  }

  useEffect(() => {
    loadFavourites()
  },[])

  useEffect(() => {
    saveFavourites(favourites)
    console.log('saved')
  },[favourites])

  return (
    <FavouritesContext.Provider
      value={{
        favourites: favourites,
        addToFavorites: add,
        removeFromFavourites: remove,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
