import * as path from "path";
import * as fs from "fs";
import * as esbuild from "esbuild";
import { json } from "stream/consumers";

const str: string = "i love fe";

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
  entryPoints: [path.resolve(__dirname, "./demos/ts-demo/index.ts")],
  outdir: path.resolve(__dirname, "../dist"),
  bundle: true,

  banner: {
    js: "// banner code",
  },
  footer: {
    js: "// footer code",
  },

  sourcemap: "inline",
  format: "iife",
  minify: false,
  treeShaking: true,
  define: {
    "process.env.mode": JSON.stringify("c-env"),
  },
  plugins: [demoPlugin()],
};

// main
(async () => {
  const ret = await esbuild.build(buildOptions);
  console.log(`ret: ${ret}`);
})();

export {};
