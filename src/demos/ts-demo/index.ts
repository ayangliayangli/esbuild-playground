import { add } from "./utils";
import imageUrl from './images/demo.png';

const ret = add(1, 2); // use method of module ./utils
const str: string = 'this is "src/demos/ts-demo/index.ts"';
console.log(process.env.mode + `str: ${str}`); // define

import("./dUtils").then((utils) => {
  console.log("dynamic import()");
  console.log(utils.dAdd(3, 8));
});

console.log(imageUrl);




// export { ret };
