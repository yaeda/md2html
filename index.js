import fs from "fs";
import doc from "rehype-document";
import minify from "rehype-preset-minify";
import stringify from "rehype-stringify";
import gfm from "remark-gfm";
import parse from "remark-parse";
import mutate from "remark-rehype";
import unified from "unified";

export default async (input) => {
  return unified()
    .use(parse)
    .use(gfm)
    .use(mutate)
    .use(doc, { style: [fs.readFileSync("style.css", "utf8")] })
    .use(stringify)
    .use(minify)
    .process(fs.readFileSync(input))
    .then((file) => {
      return String(file);
    });
};
