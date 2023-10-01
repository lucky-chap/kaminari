/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page-3/page";

describe("Home", () => {
  it("talks about the invention of the computer mouse", () => {
    render(<Home />);

    const text = screen.getByText(
      /The computer mouse was invented by Douglas Engelbart in 1964/i
    );

    expect(text).toBeInTheDocument();
  });
});
