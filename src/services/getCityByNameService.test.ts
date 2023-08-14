import { mockCityAPIResponse } from "@__tests__/mocks/api/mockCityAPIResponse";
import { api } from "./api";
import { getCityByNameService } from "./getCityByNameService";

describe("API: getCityByNameService", () => {
  it("should return city details", async () => {
    jest.spyOn(api, "get").mockResolvedValueOnce({
      data: mockCityAPIResponse,
    });

    const response = await getCityByNameService("Alicante");
    expect(response.length).toBeGreaterThan(0);
  });
});
