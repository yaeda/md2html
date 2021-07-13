import fs from "fs";
import path, { dirname } from "path";
import doc from "rehype-document";
import minify from "rehype-preset-minify";
import stringify from "rehype-stringify";
import gfm from "remark-gfm";
import parse from "remark-parse";
import mutate from "remark-rehype";
import unified from "unified";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const cssPath = path.resolve(__dirname, "style.css");

export default async (input) => {
  return unified()
    .use(parse)
    .use(gfm)
    .use(mutate)
    .use(doc, {
      style: [fs.readFileSync(cssPath, "utf8")],
    })
    .use(stringify)
    .use(minify)
    .process(fs.readFileSync(input))
    .then((file) => {
      return String(file);
    });
};
