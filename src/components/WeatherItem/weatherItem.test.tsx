import drop from "@assets/drop.svg";
import { render, screen } from "@testing-library/react-native";
import { WeatherItem } from ".";

describe("Component: WeatherItem", () => {
  it("should render the component", () => {
    render(<WeatherItem 
        title="Umidade do ar"
        icon={drop}
        value="81%"
    />);

    const title = screen.getByText("Umidade do ar");
    const value = screen.getByText("81%");

    expect(title).toBeTruthy();
    expect(value).toBeTruthy();
  });
});
