/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-13 19:28:05
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-13 20:06:29
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\ts-challenge\type-challenges\Percentage Parser\template.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
type isEmpty<T> = T extends "+" | "-" ? T : never;
type Get<T> = T extends `${isEmpty<infer P>}${infer B}` ? [P, B] : ["", T];
type PercentageParser<A extends string> = A extends `${infer P}%`
  ? [...Get<P>, "%"]
  : [...Get<A>, ""];
