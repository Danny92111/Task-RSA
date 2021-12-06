import { render, screen, cleanup } from "@testing-library/react";
import Option from "./Option";

afterEach(() => {
	cleanup();
});

test("should render option component", () => {
	render(<Option />);
	const optionComponent = screen.getByTestId("optionComponent");
	expect(optionComponent).toBeInTheDocument();
});
