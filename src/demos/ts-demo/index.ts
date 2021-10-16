import { add } from './utils'

const str: string = 'this is "src/demos/ts-demo/index.ts"'
const ret = add(1, 2)
console.log(ret);
console.log(process.env.mode);


export {str}