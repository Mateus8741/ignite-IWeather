import clearDay from '@assets/clear_day.svg';
import { render, screen } from "@testing-library/react-native";
import { Day } from ".";

describe('Component: Day', () => {
    it('should be render day', () => {
        render(<Day data={{
            day: "18/07",
            min: "30c",
            max: "40c",
            icon: clearDay,
            weather: "Ensolarado"
        }} />);

        expect(screen.getByText('18/07')).toBeTruthy();
    });
});