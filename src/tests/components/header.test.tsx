import { render, screen } from "@testing-library/react";
import Header from "@/components/Header";
import "@testing-library/jest-dom";

describe("Header", () => {
  beforeEach(() => {
    render(<Header />);
  });

  it("renders a header logo", () => {
    const heading = screen.getByRole("headerLogo");

    expect(heading).toContainHTML("svg");
  });

  it("renders a Github btn", () => {
    const heading = screen.getByRole("headerGithubBtn");

    expect(heading).toContainHTML("svg");
  });
});

