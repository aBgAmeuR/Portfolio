import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import "@testing-library/jest-dom";
import data from "@/content/main.json";

describe("Home page", () => {
  beforeEach(() => {
    render(<Home />);
  });

  it("renders a main description", () => {
    const heading = screen.getByRole("mainDesc");

    expect(heading).toContainHTML(data.desc);
  });

  it("renders a copyright", () => {
    const heading = screen.getByRole("heading", {
      name: /©2023/i,
    });

    expect(heading).toBeInTheDocument();
  });
});