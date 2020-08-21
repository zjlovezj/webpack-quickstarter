// Type definitions for [~THE LIBRARY NAME~] [~OPTIONAL VERSION NUMBER~]
// Project: [~THE PROJECT NAME~]
// Definitions by: [~YOUR NAME~] <[~A URL FOR YOU~]>

import EditorJS from "@editorjs/editorjs";

/*~ If this library is callable (e.g. can be invoked as myLib(3)),
 *~ include those call signatures here.
 *~ Otherwise, delete this section.
 */
// declare function myLib(a: string): string;
// declare function myLib(a: number): number;

// /*~ If you want the name of this library to be a valid type name,
//  *~ you can do so here.
//  *~
//  *~ For example, this allows us to write 'var x: myLib';
//  *~ Be sure this actually makes sense! If it doesn't, just
//  *~ delete this declaration and add types inside the namespace below.
//  */
// interface myLib {
//   name: string;
//   length: number;
//   extras?: string[];
// }

// interface Window {
//   EditorJS: EditorJS;
// }

// TS有用。JS没用。
interface Window {
  test: string;
 }

//  declare var ee: EditorJS;

 
 // JS可用。 window.gee
 declare global {
   var gee: EditorJS;

   // 或者
   interface Window {
    gtest: string;
   }
 }

// /*~ If your library has properties exposed on a global variable,
//  *~ place them here.
//  *~ You should also place types (interfaces and type alias) here.
//  */
// declare namespace myLib {
//   //~ We can write 'myLib.timeout = 50;'
//   let timeout: number;

//   //~ We can access 'myLib.version', but not change it
//   const version: string;

//   //~ There's some class we can create via 'let c = new myLib.Cat(42)'
//   //~ Or reference e.g. 'function f(c: myLib.Cat) { ... }
//   class Cat {
//     constructor(n: number);

//     //~ We can read 'c.age' from a 'Cat' instance
//     readonly age: number;

//     //~ We can invoke 'c.purr()' from a 'Cat' instance
//     purr(): void;
//   }

//   //~ We can declare a variable as
//   //~   'var s: myLib.CatSettings = { weight: 5, name: "Maru" };'
//   interface CatSettings {
//     weight: number;
//     name: string;
//     tailLength?: number;
//   }

//   //~ We can write 'const v: myLib.VetID = 42;'
//   //~  or 'const v: myLib.VetID = "bob";'
//   type VetID = string | number;

//   //~ We can invoke 'myLib.checkCat(c)' or 'myLib.checkCat(c, v);'
//   function checkCat(c: Cat, s?: VetID);
// }

// import Vue from "vue";
// import { AxiosInstance, AxiosRequestConfig } from "axios";

// // 可惜内部代码不能通过此类型推导
// //import * as api from "./api";

// declare module "vue/types/vue" {
//   interface Vue {
//     $http: AxiosInstance;
//     // $api: api;
//   }
// }

// declare module "axios/index" {
//   interface AxiosRequestConfig {
//     noErrorMessage?: boolean | false;
//   }
}
// declare module "*.vue" {
//   import Vue from "vue";
//   export default Vue;
//   interface Vue {
//     $isLocalEnv: boolean;
//   }
// }

// import Vue, { VueConstructor } from "vue";

// declare module "vue/types/vue" {
//   interface Vue {
//     $ga: any;
//   }

//   interface VueConstructor {
//     $ga: any;
//   }
// }
