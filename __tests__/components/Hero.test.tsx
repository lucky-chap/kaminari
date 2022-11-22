import { render, screen } from "@testing-library/react"

import Hero from "@/ui/Hero"

describe("Home", () => {
  it("renders a heading", () => {
    render(<Hero />)

    const heading = screen.getByRole("heading", {
      name: /Starter Template For Your Next Project/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
