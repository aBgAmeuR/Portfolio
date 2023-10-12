import { render, screen } from "@testing-library/react";
import Projet from "@/components/Projet";
import "@testing-library/jest-dom";
import projects from "@/content/projects.json";

describe("Home page", () => {
  const projet = projects[0];

  beforeEach(() => {
    render(<Projet data={projet} />);
  });

  it("renders a title project", () => {
    const heading = screen.getByRole("heading", {
      name: projet.title,
    });

    expect(heading).toBeInTheDocument();
  });

  it("renders a type project", () => {
    const heading = screen.getByRole("heading", {
      name: projet.type,
    });

    expect(heading).toBeInTheDocument();
  });

  it("renders a technologies project", () => {
    const heading = screen.getByRole("list");

    expect(heading).toBeInTheDocument();
  });

  it("renders a technologies project length", () => {
    const heading = screen.getAllByRole("listitem");

    expect(heading.length).toBe(projet.technologies.length);
  });

  it("renders a image project", () => {
    const heading = screen.getByAltText(`${projet.title} image`);

    expect(heading).toBeInTheDocument();
  });

});