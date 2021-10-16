import * as path from 'path'
import * as os from 'os'

const str: string = 'i love fe'

console.log(str);

// __dirname + path.basename() == filename;
console.log(`__dirname: ${__dirname}, __filename: ${__filename}`); // full path

// => /Users/ligfee/Documents/code/self/esbuild.d/esbuild-playground/src
const filenameDirname = path.dirname(__filename); 
// => index.ts
const filenameBasename = path.basename(__filename);

console.log(`filenameDirname: ${filenameDirname}, filenameBasename: ${filenameBasename}`);

// 脚本执行的位置 /Users/ligfee/Documents/code/self/esbuild.d/esbuild-playground
const CWD = process.cwd();
console.log(`CWD: ${CWD}`)



export {};

