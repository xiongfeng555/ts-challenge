/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-15 18:51:39
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-15 19:22:34
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\ts-challenge\type-challenges\AllCombinations\template.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// your answers
type string2union<S extends string> = S extends `${infer F}${infer K}`
  ? F | string2union<K>
  : never;

type combinations<T extends string, U extends string = T> = [T] extends [never]
  ? ""
  : T extends U
  ? `${T}${combinations<Exclude<U, T>>}` | `${combinations<Exclude<U, T>>}`
  : "";

type AllCombinations<S extends string> = combinations<string2union<S>>;
