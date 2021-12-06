import { render, screen, cleanuup, cleanup } from "@testing-library/react";
import Description from "./Description";

afterEach(() => {
	cleanup();
});
test("should render description component", () => {
	render(<Description />);
	const descriptionComponent = screen.getByTestId("descriptionComponent");
	expect(descriptionComponent).toBeInTheDocument();
});

test("Check if name has a text value", () => {
	render(<Description />);
	const descriptionComponent = screen.getByTestId("name");
	expect(descriptionComponent).toHaveTextContent(/(.*?)/);
});

test("Check if address has a text value", () => {
	render(<Description />);
	const descriptionComponent = screen.getByTestId("address");
	expect(descriptionComponent).toHaveTextContent(/(.*?)/);
});

test("Check if reference has a text value", () => {
	render(<Description />);
	const descriptionComponent = screen.getByTestId("reference");
	expect(descriptionComponent).toHaveTextContent(/(.*?)/);
});

test("Check if date has a text value", () => {
	render(<Description />);
	const descriptionComponent = screen.getByTestId("date");
	expect(descriptionComponent).toHaveTextContent(/(.*?)/);
});
