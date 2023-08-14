import { getNextDays } from "./getNextDays";

describe("getNextDays", () => {

it("should be return the next fice days", () => {
    const days = getNextDays();

    expect(days).toHaveLength(5);
})
})