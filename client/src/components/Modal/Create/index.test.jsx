import { describe, expect, it, vi } from "vitest";
import { render, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import Create from "./index";

import axios from "axios";

vi.mock("axios");

describe("Create Modal", () => {
  it("should ", async () => {
    axios.post = vi.fn(() => Promise.resolve({ id: 1 }));

    const { getByPlaceholderText, getByDisplayValue, findByDisplayValue } =
      render(<Create />);

    await act(async () => {
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
    });

    expect(axios.post).toHaveBeenCalledWith("http://localhost:5000/veiculos", {
      vehicle: "Tesla",
      brand: "Teslaa",
      year: "2022",
      sold: true,
      description: "otimo",
    });
  });
});
