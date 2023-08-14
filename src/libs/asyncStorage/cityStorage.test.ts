import { CityProps } from "@services/getCityByNameService";
import { getStorageCity, removeStorageCity, saveStorageCity } from "./cityStorage";

const newCity: CityProps = {
    id: "1",
    name: 'São Paulo',
    latitude: 1123,
    longitude: 1231,
}

describe('Storage: CityStorage', () => {
    it('should be return null when dont have a city storage', async () => {
        const response = await getStorageCity();
        expect(response).toBeNull();
    });

    it('should be return a city storage', async () => {
        await saveStorageCity(newCity);
        const response = await getStorageCity();

        expect(response).toEqual(newCity);
    });

    it('should be remove a city storage', async () => {
        await saveStorageCity(newCity);
        await removeStorageCity();
        const response = await getStorageCity();

        expect(response).toBeNull();
    });
});