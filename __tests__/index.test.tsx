/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home", () => {
  it("Gives an overview of project.", () => {
    render(<Home />);

    const text = screen.getByText(
      /Think of Kaminari as that friend who shows up with snacks and already picked the movie/i,
    );

    expect(text).toBeInTheDocument();
  });
});
