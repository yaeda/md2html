import fs from "fs";
import doc from "rehype-document";
import minify from "rehype-preset-minify";
import stringify from "rehype-stringify";
import gfm from "remark-gfm";
import parse from "remark-parse";
import mutate from "remark-rehype";
import unified from "unified";

if (process.argv.length < 3) {
  process.exit(1);
}

const input = process.argv[2];

unified()
  .use(parse)
  .use(gfm)
  .use(mutate)
  .use(doc, { style: [fs.readFileSync("markdown.css", "utf8")] })
  .use(stringify)
  .use(minify)
  .process(fs.readFileSync(input), (error, file) => {
    console.error(error);
    console.log(String(file));
  });
