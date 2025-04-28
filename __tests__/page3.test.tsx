/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page-3/page";

describe("Home", () => {
  it("A short description of the invention of the computer mouse.", () => {
    render(<Home />);

    const text = screen.getByText(
      /The rest of the world is just confused./i,
    );

    expect(text).toBeInTheDocument();
  });
});
