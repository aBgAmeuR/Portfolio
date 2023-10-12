import { render, screen } from "@testing-library/react";
import Header from "@/components/Header";
import "@testing-library/jest-dom";

describe("Header logo", () => {
  it("renders a header logo", () => {
    render(<Header />);

    const heading = screen.getByRole("headerLogo");

    expect(heading).toContainHTML("svg");
  });
});

describe("Header Github btn", () => {
  it("renders a Github btn", () => {
    render(<Header />);

    const heading = screen.getByRole("headerGithubBtn");

    expect(heading).toContainHTML("svg");
  });
});