import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Vehicle from "./index";

const data = [
  {
    _id: "1",
    brand: "tesla",
    vehicle: "TESLA",
    sold: false,
    year: 2022,
  },
];

describe("Vehicle Component", () => {
  it("Should", () => {
    const { getByText, debug } = render(<Vehicle vehicle={data} />);

    expect(getByText("tesla")).toBeInTheDocument();
    expect(getByText("TESLA")).toBeInTheDocument();
    expect(getByText("2022")).toBeInTheDocument();
  });
});
