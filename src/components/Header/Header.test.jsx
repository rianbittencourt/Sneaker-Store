import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  beforeEach(() => {
    render(<Header />);
  });

  it("renders without errors", () => {
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });

  it("displays the correct logo", () => {
    const logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();
  });
  
  it("displays the correct menu items", () => {
    const menuItems = screen.getAllByRole("link");
    expect(menuItems).toHaveLength(4);
    expect(menuItems[0]).toHaveTextContent("Home");
    expect(menuItems[1]).toHaveTextContent("Category");
    expect(menuItems[2]).toHaveTextContent("About");
    expect(menuItems[3]).toHaveTextContent("Contact");
  });

  it("displays the CartButton component with the correct icon and item count", () => {
    const cartIcon = screen.getByRole("img", { hidden: true });
    expect(cartIcon).toBeInTheDocument();
    const itemCount = screen.getByText("0");
    expect(itemCount).toBeInTheDocument();
  });
});
