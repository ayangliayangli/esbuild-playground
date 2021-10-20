import * as path from "path";
import * as fs from "fs";
import * as esbuild from "esbuild";

const str: string = "i love esbuild";
const CWD = process.cwd();

const demoPlugin = () => {
  return {
    name: "demoPlugin",
    // @ts-ignore
    setup({ onStart, onResolve, onLoad, onEnd }) {
      onStart(() => {
        console.log("onStart");
      });
      onResolve({ filter: /.*/ }, (msg: any) => {
        console.log(`onResolve: `, msg);
      });
      onLoad({ filter: /.*/ }, (msg: any) => {
        console.log(`onLoad: `, msg);
      });
      onEnd((msg: any) => {
        console.log(`onEnd: ${msg}`);
      });
    },
  };
};

const buildOptions: esbuild.BuildOptions = {
  entryPoints: [path.resolve(CWD, "src/demos/ts-demo/index.ts")],
  outdir: path.resolve(CWD, "dist"),
  bundle: true,

  banner: {
    js: "// banner code",
  },
  footer: {
    js: "// footer code",
  },

  platform: "browser",
  target: "es6",
  format: "esm", // iife esm cjs
  sourcemap: "inline",
  
  // optimization options
  minify: false,
  treeShaking: true,
  splitting: false,

  // define
  define: {
    "process.env.mode": JSON.stringify("c-env"),
  },
  // plugins: [demoPlugin()],
};

// main
(async () => {
  const ret = await esbuild.build(buildOptions);
  console.log(`ret: ${ret}`);
})();

export {};
