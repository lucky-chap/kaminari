/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home", () => {
  it("describes the project", () => {
    render(<Home />);

    const text = screen.getByText(
      /a modern Next.js, Tailwind CSS and shadcn-ui boilerplate that includes all you need to build amazing projects/i
    );

    expect(text).toBeInTheDocument();
  });
});
