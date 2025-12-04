import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { GridExample } from "./simple";

describe("GridExample", () => {
  it("renders without crashing", () => {
    const { container } = render(<GridExample />);
    expect(container).toBeTruthy();
  });

  it("renders the grid container with correct dimensions", () => {
    const { container } = render(<GridExample />);
    const gridContainer = container.querySelector('div[style*="width: 500px"]');
    expect(gridContainer).toBeTruthy();
  });

  it("renders AG Grid component", () => {
    const { container } = render(<GridExample />);
    const agGrid = container.querySelector(".ag-root-wrapper");
    expect(agGrid).toBeTruthy();
  });

  it("renders all column headers", async () => {
    render(<GridExample />);
    expect(await screen.findByText("Make")).toBeInTheDocument();
    expect(await screen.findByText("Model")).toBeInTheDocument();
    expect(await screen.findByText("Price")).toBeInTheDocument();
    expect(await screen.findByText("Electric")).toBeInTheDocument();
  });

  it("renders all car makes", async () => {
    render(<GridExample />);
    expect(await screen.findByText("Tesla")).toBeInTheDocument();
    expect(await screen.findByText("Ford")).toBeInTheDocument();
    expect(await screen.findByText("Toyota")).toBeInTheDocument();
    expect(await screen.findByText("Mercedes")).toBeInTheDocument();
    expect(await screen.findByText("Fiat")).toBeInTheDocument();
    expect(await screen.findByText("Nissan")).toBeInTheDocument();
  });

  it("renders all car models", async () => {
    render(<GridExample />);
    expect(await screen.findByText("Model Y")).toBeInTheDocument();
    expect(await screen.findByText("F-Series")).toBeInTheDocument();
    expect(await screen.findByText("Corolla")).toBeInTheDocument();
    expect(await screen.findByText("EQA")).toBeInTheDocument();
    expect(await screen.findByText("500")).toBeInTheDocument();
    expect(await screen.findByText("Juke")).toBeInTheDocument();
  });

  it("renders all prices correctly", async () => {
    render(<GridExample />);
    expect(await screen.findByText("64950")).toBeInTheDocument();
    expect(await screen.findByText("33850")).toBeInTheDocument();
    expect(await screen.findByText("29600")).toBeInTheDocument();
    expect(await screen.findByText("48890")).toBeInTheDocument();
    expect(await screen.findByText("15774")).toBeInTheDocument();
    expect(await screen.findByText("20675")).toBeInTheDocument();
  });

  it("renders electric status correctly", async () => {
    const { container } = render(<GridExample />);
    await waitFor(() => {
      const rows = container.querySelectorAll(".ag-row");
      expect(rows.length).toBe(6);
      // Check that each row has 4 cells (make, model, price, electric)
      rows.forEach((row) => {
        const cells = row.querySelectorAll(".ag-cell");
        expect(cells.length).toBe(4);
      });
    });
  });

  it("renders correct number of data rows", async () => {
    const { container } = render(<GridExample />);
    await waitFor(() => {
      const rows = container.querySelectorAll(".ag-row");
      expect(rows.length).toBe(6);
    });
  });
});
