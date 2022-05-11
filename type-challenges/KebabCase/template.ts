/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-11 20:35:08
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-11 21:07:28
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\ts-challenge\type-challenges\KebabCase\template.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
type letter = {
  A: "a";
  B: "b";
  C: "c";
  D: "d";
  E: "e";
  F: "f";
  G: "g";
  H: "h";
  I: "i";
  J: "j";
  K: "k";
  L: "l";
  M: "m";
  N: "n";
  O: "o";
  P: "p";
  Q: "q";
  R: "r";
  S: "s";
  T: "t";
  U: "u";
  V: "v";
  W: "w";
  X: "x";
  Y: "y";
  Z: "z";
};
type KebabCase<
  S extends string,
  isFirst extends boolean = true
> = S extends `${infer F}${infer P}`
  ? F extends keyof letter
    ? `${isFirst extends true ? "" : "-"}${letter[F]}${KebabCase<P, false>}`
    : `${F}${KebabCase<P, false>}`
  : "";
