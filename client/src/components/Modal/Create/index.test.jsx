import { describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import Create from "./index";

import axios from "axios";

vi.mock("axios");

describe("Create Modal", () => {
  it("should send to api ", async () => {
    axios = vi.fn(() => Promise.resolve({ id: 1 }));

    const { getByPlaceholderText, getByDisplayValue, findByDisplayValue } =
      render(
        <Create
          isModal={true}
          setVehicleById={vi.fn()}
          modal={vi.fn()}
          getAll={axios}
        />
      );

    const inputVehicle = getByPlaceholderText("Veículo");
    const inputBrand = getByPlaceholderText("Marca");
    const inputYear = getByPlaceholderText("Ano");
    const inputSold = getByPlaceholderText("Vendido");
    const inputDescription = getByPlaceholderText("Descrição");

    await userEvent.type(inputVehicle, "Tesla");
    await userEvent.type(inputBrand, "Teslaa");
    await userEvent.type(inputYear, "2022");
    await userEvent.type(inputSold, "true");
    await userEvent.type(inputDescription, "otimo");

    expect(await findByDisplayValue("Tesla")).toBeInTheDocument();
    expect(await findByDisplayValue("Teslaa")).toBeInTheDocument();
    expect(await findByDisplayValue("2022")).toBeInTheDocument();
    expect(await findByDisplayValue("otimo")).toBeInTheDocument();

    const submit = getByDisplayValue("ADD");
    await userEvent.click(submit);

    expect(axios).toHaveBeenCalledWith({
      method: "POST",
      baseURL: "http://localhost:5000",
      url: "/veiculos",
      data: {
        vehicle: "Tesla",
        brand: "Teslaa",
        year: "2022",
        sold: true,
        description: "otimo",
      },
    });
  });
});
