import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it } from "vitest";
import Input from "./index";

const mockLogin = vi.fn((email) => {
  return Promise.resolve({ email });
});

describe("Input Components", () => {
  it("should erro", () => {
    const { getByText } = render(
      <Input errorName="Obrigatório" register={mockLogin} name="email" />
    );

    expect(getByText("Obrigatório")).toBeInTheDocument();
  });

  it("should valeu", async () => {
    const { getByPlaceholderText } = render(
      <Input
        register={mockLogin}
        name="email"
        value="jonnathan"
        placeholder="seu e-mail"
      />
    );

    const InputElemete = getByPlaceholderText("seu e-mail");

    expect(InputElemete).toHaveDisplayValue("jonnathan");
  });
});
