/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page-2/page";

describe("Home", () => {
  it("talks about the world's first programmer", () => {
    render(<Home />);

    const text = screen.getByText(
      /Ada Lovelace, an English mathematician and writer, is considered the world's first computer programmer/i
    );

    expect(text).toBeInTheDocument();
  });
});
