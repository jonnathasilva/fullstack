import { describe, expect, it } from "vitest";
import { getAll, add } from "./api";

import axios from "axios";

vi.mock("axios");

describe("APi", () => {
  it("should", async () => {
    const data = [
      {
        id: 1,
        vehicle: "tesla",
        sold: false,
        brand: "tesla",
        description: "bom",
      },
      {
        id: 2,
        vehicle: "tesla02",
        sold: true,
        brand: "tesla02",
        description: "bomm",
      },
    ];

    axios.get.mockResolvedValue(data);

    const result = await getAll();

    expect(axios.get).toHaveBeenCalledWith("http://localhost:5000/veiculos");
    expect(result).toEqual(data);
  });

  it("should post", async () => {
    const data = [
      {
        id: 1,
        vehicle: "tesla",
        sold: false,
        brand: "tesla",
        description: "bom",
      },
    ];

    axios.post.mockResolvedValue(data);

    const result = await add(data);

    expect(axios.post).toHaveBeenCalledWith(
      "http://localhost:5000/veiculos",
      data
    );
    expect(result).toEqual(data);
  });
});
