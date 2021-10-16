import * as path from "path";
import * as fs from "fs";
import * as esbuild from "esbuild";

const str: string = "i love fe";

const entryFilename = path.resolve(__dirname, "./demos/ts-demo/index.ts");
const options: esbuild.TransformOptions = {
    loader: "ts",
    banner: "// this is banner",
    footer: "// this is footer",
    sourcemap: "inline",
    minify: true,
    minifyWhitespace: true,
    minifySyntax: true,
    minifyIdentifiers: true,
    treeShaking: true,

}
const ret = esbuild.transformSync(fs.readFileSync(entryFilename, { encoding: "utf-8" }), options);

console.log(ret);


export {};
