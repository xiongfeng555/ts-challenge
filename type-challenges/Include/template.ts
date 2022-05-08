/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-08 19:56:43
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-08 20:19:20
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\ts-challenge\type-challenges\Include\template.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false
// type Includes<T extends readonly any[], U> = T extends [infer first,...infer rest] ? (Equal<U,first> extends true ? true : Includes<rest,U>) : false
type Includes<T extends readonly any[], U> = T extends [infer A, ...infer B] ? Equal<A, U> extends true ? true : Includes<B, U> : false;
