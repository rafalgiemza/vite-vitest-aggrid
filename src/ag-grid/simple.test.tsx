import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
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
    const agGrid = container.querySelector('.ag-root-wrapper');
    expect(agGrid).toBeTruthy();
  });
});
