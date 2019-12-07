import { countdownIterative, countdownRecursive } from "./countdown";

test("should countdown", () => {
  countdownIterative(5);
});

test("should countdown", () => {
  countdownRecursive(5);
});
