import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthenticationContext} from "../../infrastructure/authentication/authentication.context"


export const FavouritesContext = createContext();

export const FavouriteContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  const { user } = useContext(AuthenticationContext)
  const add = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  const remove = (restaurant) => {
    const newFavourites = favourites.filter(
      (x) => x.placeId !== restaurant.placeId
    );
    setFavourites(newFavourites);
  };

  const saveFavourites = async (value, uid) => {
    try{
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
    } catch (err) {
      console.log("error saving "+err)
    }
  }

  const loadFavourites = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`@favourites-${uid}`);
      if(value !== null){
        setFavourites(JSON.parse(value));
      } 
    }catch(err){
        console.log("error loading "+err);
    }
  }

  useEffect(() => {
    if(user){

      loadFavourites(user.uid)
    }
  },[user])

  useEffect(() => {
    if(user){
      saveFavourites(favourites, user.uid)

    }
  },[favourites,user])

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
