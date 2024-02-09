import { describe, test, expect } from "vitest";
import { SerieCalculator } from "../components/SerieCalculator";

describe("Pruebas para SerieCalculator", () => {
  test.each([
    [1, 10],
    [2, 14],
    [3, 22],
    [4, 30],
    [5, 47],
    [6, 58],
    [7, 81],
    [8, 103],
    [9, 145],
    [10, 215],
  ])("serie(%i)", (n, expected) => {
    expect(SerieCalculator.serie(n)).toBe(expected);
  });
});
