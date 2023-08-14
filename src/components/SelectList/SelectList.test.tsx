import { fireEvent, render, screen } from "@testing-library/react-native";

import { SelectList } from "@components/SelectList";

describe("Component: SelectList", () => {
  it("should be return city details selected", () => {
    const data = [
      {
        id: '1',
        name: "A Coruña",
        latitude: 43.37135,
        longitude: -8.396,
      },
      {
        id: '2',
        name: "Alicante",
        latitude: 38.34517,
        longitude: -0.48149,
      }
    ];

    const onPress = jest.fn();

    render(<SelectList data={data} onChange={() => {}} onPress={onPress} />);

    const selectedCity = screen.getByText(/alicante/i);

    fireEvent.press(selectedCity);

    expect(onPress).toBeCalledWith(data[1]);
  });

  it("not should be show otpions when data props is empty", () => {
    render(<SelectList data={[]} onChange={() => {}} onPress={() => {}} />);

    const options = screen.queryByTestId("options");

    expect(options.children).toHaveLength(0);
  })
});
