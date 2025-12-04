import { render, screen, within, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { GridExample } from "./simple";

describe("GridExample", () => {
  it("renders AG Grid component", async () => {
    render(<GridExample />);
    expect(await screen.findByRole("grid")).toBeInTheDocument();
  });

  it("renders all column headers", async () => {
    render(<GridExample />);
    expect(
      await screen.findByRole("columnheader", { name: "Make" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: "Model" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: "Price" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: "Electric" })
    ).toBeInTheDocument();
  });

  it("renders all car data in grid", async () => {
    render(<GridExample />);

    // Wait for first data element to ensure grid has loaded data
    expect(await screen.findByText("Tesla")).toBeInTheDocument();

    // Check car makes
    expect(screen.getByText("Ford")).toBeInTheDocument();
    expect(screen.getByText("Toyota")).toBeInTheDocument();
    expect(screen.getByText("Mercedes")).toBeInTheDocument();
    expect(screen.getByText("Fiat")).toBeInTheDocument();
    expect(screen.getByText("Nissan")).toBeInTheDocument();

    // Check car models
    expect(screen.getByText("Model Y")).toBeInTheDocument();
    expect(screen.getByText("F-Series")).toBeInTheDocument();
    expect(screen.getByText("Corolla")).toBeInTheDocument();
    expect(screen.getByText("EQA")).toBeInTheDocument();
    expect(screen.getByText("500")).toBeInTheDocument();
    expect(screen.getByText("Juke")).toBeInTheDocument();

    // Check prices
    expect(screen.getByText("64950")).toBeInTheDocument();
    expect(screen.getByText("33850")).toBeInTheDocument();
    expect(screen.getByText("29600")).toBeInTheDocument();
    expect(screen.getByText("48890")).toBeInTheDocument();
    expect(screen.getByText("15774")).toBeInTheDocument();
    expect(screen.getByText("20675")).toBeInTheDocument();
  });

  it("renders correct number of data rows", async () => {
    render(<GridExample />);

    // Wait for data to load
    await screen.findByText("Tesla");

    const grid = screen.getByRole("grid");
    const rows = within(grid).getAllByRole("row");

    // Should have header row + 6 data rows
    expect(rows.length).toBeGreaterThanOrEqual(6);
  });

  it("renders correct number of cells per row", async () => {
    render(<GridExample />);

    // Wait for data to load
    await screen.findByText("Tesla");

    const grid = screen.getByRole("grid");

    await waitFor(() => {
      const rows = within(grid).getAllByRole("row");

      // Get data rows (skip header)
      const dataRows = rows.filter((row) => {
        const cells = within(row).queryAllByRole("gridcell");
        return cells.length > 0;
      });

      // Should have 6 data rows
      expect(dataRows.length).toBe(6);

      // Each data row should have 4 cells (make, model, price, electric)
      dataRows.forEach((row) => {
        const cells = within(row).getAllByRole("gridcell");
        expect(cells.length).toBe(4);
      });
    });
  });
});
