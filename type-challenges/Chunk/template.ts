/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-16 18:13:30
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-16 18:45:05
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\ts-challenge\type-challenges\Chunk\template.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

type Chunk<
  T extends any[],
  N extends number = 1,
  R extends any[] = [],
  U extends any[] = []
> = T extends [infer F, ...infer B]
  ? U["length"] extends N
    ? Chunk<T, N, [...R, [...U]], []>
    : Chunk<B, N, R, [...U, F]>
  : U extends []
  ? R
  : [...R, U];
