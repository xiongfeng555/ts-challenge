/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-15 19:25:31
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-15 19:38:33
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\ts-challenge\type-challenges\Greater Than\template.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
type numToArr<
  T extends number,
  U extends unknown[] = []
> = U["length"] extends T ? U : numToArr<T, [...U, 0]>;
type popArr<T extends any[]> = T extends [infer F, ...infer REST]
  ? [...REST]
  : [];
type GreaterThan2<T extends any[], U extends any[]> = T extends []
  ? U extends []
    ? false
    : false
  : U extends []
  ? true
  : GreaterThan2<popArr<T>, popArr<U>>;

type GreaterThan<T extends number, U extends number> = GreaterThan2<
  numToArr<T>,
  numToArr<U>
>;
