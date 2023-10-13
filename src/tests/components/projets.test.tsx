import { render, screen } from "@testing-library/react";
import Projets from "@/components/Projets";
import "@testing-library/jest-dom";
import data from "@/content/projects.json";

describe("Projets component", () => {
  beforeEach(() => {
    render(<Projets />);
  });

  it("renders a projects length", () => {
    const heading = screen.getAllByRole("heading", {
      name: /Technologies/i,
    });
    
    expect(heading.length).toBe(data.length);
  });

});
