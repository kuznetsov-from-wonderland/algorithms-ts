import { sum } from "../index";

describe("SUM", () => {
  test("should be ok", () => {
    expect(true).toBe(true);
  });
  test("should add number", () => {
    const s = sum(1, 4);
    expect(s).toBe(5);
  });
});
