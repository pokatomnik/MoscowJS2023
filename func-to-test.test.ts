import { assertEquals } from "testing";
import { sum } from "./func-to-test.ts";

Deno.test("Test sum", async () => {
  assertEquals(await sum(1, 2), 4);
});
