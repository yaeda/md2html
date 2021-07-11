import test from "ava";
import path from "path";
import md2html from "../index.js";

const fixtureBasePath = path.resolve("test", "fixtures");

test("foo", async (t) => {
  const mdPath = path.resolve(fixtureBasePath, "test.md");
  t.snapshot(await md2html(mdPath));
});
