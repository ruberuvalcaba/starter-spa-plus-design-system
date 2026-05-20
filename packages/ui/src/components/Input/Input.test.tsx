import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Input } from "./Input";

describe("Input", () => {
  it("renders with placeholder", () => {
    render(<Input placeholder="name" />);
    expect(screen.getByPlaceholderText("name")).toBeInTheDocument();
  });
});
