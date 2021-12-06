import { render, screen, cleanup } from "@testing-library/react";
import Total from "./Total";

afterEach(() => {
	cleanup();
});

test("should render total component", () => {
	render(<Total />);
	const totalComponent = screen.getByTestId("totalComponent");
	expect(totalComponent).toBeInTheDocument();
});
