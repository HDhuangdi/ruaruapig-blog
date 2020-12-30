declare module "marked" {
  let marked: function;
  marked.Renderer = any;
  marked.setOptions = any;
  export default marked;
}
