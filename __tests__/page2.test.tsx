/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page-2/page";

describe("Home", () => {
  it("A short description of the world's first programmer.", () => {
    render(<Home />);

    const text = screen.getByText(
      /Entire careers have been built on the power of Stack Overflow and copy-pasting code snippets!/i,
    );

    expect(text).toBeInTheDocument();
  });
});
