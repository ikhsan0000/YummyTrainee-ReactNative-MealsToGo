import { mockImages, mocks } from "./mock";
import camelize from "camelize";

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    if (mocks[location]) {
      resolve(mocks[location]);
    }
    reject("location not found");
  });
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
      restaurant.photos = restaurant.photos.map((p) => {
        return mockImages[Math.round(Math.random() * (mockImages.length - 1))]  
      })
    return {
      ...restaurant,
      isOpen: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  console.log(mappedResults)
  return camelize(mappedResults);
};

