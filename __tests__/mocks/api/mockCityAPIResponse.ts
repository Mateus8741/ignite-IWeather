import { CityAPIResponse } from "@services/getCityByNameService";

export const mockCityAPIResponse: CityAPIResponse = {
  id: "1",
  name: "Alicante",
  sys: {
    country: "ES",
  },
  coord: {
    lat: 38.34517,
    lon: -0.48149,
  },
};
