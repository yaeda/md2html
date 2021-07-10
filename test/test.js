import test from "ava";
import md2html from "../index.js";

test("foo", async (t) => {
  t.snapshot(await md2html("test.md"));
});
