// Any import like `import url from './foo.ts?worker&url'`:
declare module "*?worker&url" {
  const src: string;
  export default src;
}
