// 如果有需要可以用下面这种import
// import EditorJS, { EditorConfig } from "@editorjs/editorjs";

// 这种是正常的使用
/**
 * @typedef {import('@editorjs/editorjs').default} EditorJS
 * @typedef {import('@editorjs/editorjs').EditorConfig} EditorConfig
 */

/** @type {EditorConfig} */
// const ec = {
//   /**
//    * Id of Element that should contain Editor instance
//    */
//   holder: "editorjs",
//   autofocus: false,
// };

// 手动设定type
/** @type {EditorJS} */
// const editor = new window.EditorJS(ec);

import "./index.css";
console.log("it works");
