/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

describe("Navigation", () => {
  it("should navigate to the home page", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/")

    // The new url should include "/about"
    cy.url().should("include", "/")

    // The new page should contain an h1 with "About page"
    cy.get("p").contains("#1 Next.js Starter Template")
  })
})

// Prevent TypeScript from reading file as legacy script
export {}
