import { render, screen } from "@testing-library/react";
import ProjetPage from "@/app/projet/[...name]/page";
import "@testing-library/jest-dom";
import data from "@/content/projects.json";
import { Data } from "@/types/data";

describe("Projet page", () => {
  // const projet: Data = data[0];

  // beforeEach(() => {
  //   render(<ProjetPage params={{ name: [projet.route] }} />);
  // });

  it("true", () => {
    expect(true).toBe(true);
  });
});