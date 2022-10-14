import { describe, it, vi } from "vitest";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import axios from "axios";

import Edit from "./index";

vi.mock("axios");

const data = {
  _id: 1,
  vehicle: "Tesla",
  brand: "Teslaa",
  year: "2022",
  sold: true,
  description: "otimo",
};

describe("Modal Edit", () => {
  it("should edit datas", async () => {
    axios = vi.fn(() => Promise.resolve({}));

    const { getByDisplayValue } = render(
      <Edit vehicleById={data} isModalEdit={true} />
    );

    const inputVehicle = getByDisplayValue("Tesla");
    const inputBrand = getByDisplayValue("Teslaa");
    const inputYear = getByDisplayValue("2022");
    const inputDescription = getByDisplayValue("otimo");

    expect(inputVehicle).toBeInTheDocument();
    expect(inputBrand).toBeInTheDocument();
    expect(inputYear).toBeInTheDocument();
    expect(inputDescription).toBeInTheDocument();

    const submit = getByDisplayValue("EDITAR");
    await userEvent.click(submit);

    expect(axios).toHaveBeenCalledWith({
      method: "PATCH",
      baseURL: "http://localhost:5000",
      url: "/veiculos/1",
      data: {
        vehicle: "Tesla",
        brand: "Teslaa",
        year: "2022",
        sold: true,
        description: "otimo",
      },
    });
  });

  it("should delete a data", async () => {
    axios = vi.fn(() => Promise.resolve());
    const { getByText, debug } = render(
      <Edit vehicleById={data} isModalEdit={true} />
    );

    const button = getByText("Excluir");
    await userEvent.click(button);

    expect(axios).toHaveBeenCalledWith({
      method: "DELETE",
      baseURL: "http://localhost:5000",
      url: "/veiculos/1",
    });
  });
});
