import React, { Component, useContext} from 'react'
import { Text, View, TouchableOpacity} from 'react-native'
import { AntDesign } from "@expo/vector-icons"
import { FavouritesContext } from '../../services/favourites/favourites.context'
import styled from "styled-components/native"
const FavouriteButton = styled(TouchableOpacity)`
    position: absolute;
    right: 0;
    top: 0;
    margin: 10px;
    z-index: 10;
`;

export const FavouriteIcon = ({restaurant}) => {
    const { favourites, addToFavorites, removeFromFavourites } = useContext(FavouritesContext) 
    const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId)
    return (
        <FavouriteButton
            onPress={ () => !isFavourite ? addToFavorites(restaurant) : removeFromFavourites(restaurant)}
        >
            <AntDesign
            name={ isFavourite ? 'heart' : 'hearto'}
            size={24}
            color={ isFavourite ? 'red' : 'white'}
            />
        </FavouriteButton>
    )
}

