import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import "@testing-library/jest-dom";
import data from "@/content/main.json";

describe("Main page description", () => {
  it("renders a main description", () => {
    render(<Home />);
    
    const heading = screen.getByRole("mainDesc");
    
    expect(heading).toContainHTML(data.desc);
  });
});

describe("Main page copyright", () => {
  it("renders a copyright", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /©2023/i,
    });

    expect(heading).toBeInTheDocument();
  });
});