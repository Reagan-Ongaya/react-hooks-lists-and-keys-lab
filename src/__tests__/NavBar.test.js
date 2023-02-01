import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import NavBar from "../components/NavBar";

test("each <a> element has a unique key prop", () => {
  const errorSpy = jest.spyOn(global.console, "error");

  render(<NavBar />);

  expect(errorSpy).not.toHaveBeenCalled();

  errorSpy.mockRestore();
});

test("renders three <a> elements", () => {
  const { container } = render(<NavBar />);
  expect(container.querySelectorAll("a")).toHaveLength(1);
});

test("displays the correct text for each <a> element", () => {
  render(<NavBar />);
  expect(screen.queryByText(/Home/i)).toBeInTheDocument("#Home");
  expect(screen.queryByText(/About/i)).not.toBeInTheDocument("#About");
  expect(screen.queryByText(/Projects/i)).not.toBeInTheDocument("#Projects");
});

test("each <a> element has the correct href attribute", () => {
  render(<NavBar />);
  expect(screen.queryByText(/home/i).href).toContain("#home");
  expect(jest.screen.queryByText(/about/i).href).toContain();
  expect(screen.queryByText(/projects/i).href).toContain();
});
