import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../../pages/Home";

describe("Modal testing", () => {
  it("Test dialog open", () => {
    render(<Home />);

    userEvent.click(screen.getByTestId("modal-open"));
    expect(screen.getByText("Hello World!")).toBeInTheDocument();
  });

  it("Test close btn", () => {
    const setOpen = jest.fn();
    React.useState = jest.fn().mockReturnValue([true, setOpen]);

    render(<Home />);

    userEvent.click(screen.getByTestId("modal-close"));
    expect(setOpen).toHaveBeenLastCalledWith(false);
  });
});
