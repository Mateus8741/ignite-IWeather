import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWatherAPIResponse";
import { api } from "./api";
import { getWeatherByCityService } from "./getWeatherByCityService";

describe("API: getWeatherByCityService", () => {
    it("shoul be return wather api data formatted", async () => {
        jest.spyOn(api, "get").mockResolvedValueOnce({data: mockWeatherAPIResponse});

        const response = await getWeatherByCityService({latitude: 123, longitude: 456});
        expect(response).toHaveProperty("today");
    });
});