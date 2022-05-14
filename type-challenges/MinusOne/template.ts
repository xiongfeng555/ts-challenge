/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-13 20:15:02
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-14 16:36:14
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\ts-challenge\type-challenges\MinusOne\template.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
type Zero = [];
type One = [unknown];

type Increase<T extends unknown[]> = [...T, unknown];
type Decrease<T extends unknown[]> = T extends [unknown, ...infer R] ? R : T;

type Add<T extends unknown[], S extends unknown[]> = [...T, ...S];
type Sub<T extends unknown[], S extends unknown[]> = T extends [
  ...infer R,
  ...S
]
  ? R
  : T;

type CanSub<T extends unknown[], S extends unknown[]> = T extends [...any, ...S]
  ? true
  : false;
type Div<
  T extends unknown[],
  S extends unknown[],
  R extends unknown[] = Zero
> = CanSub<T, S> extends true ? Div<Sub<T, S>, S, Increase<R>> : R;

type Mutil<T extends unknown[], S extends unknown[]> = S extends Zero
  ? Zero
  : S extends One
  ? T
  : Mutil<[...T, ...T], Decrease<S>>;

type MultiTen<T extends unknown[]> = [
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T
];

type GetLength<T> = T extends { length: infer R } ? R : -1;
type Create<
  T extends number | string,
  S extends unknown[] = Zero
> = `${GetLength<S>}` extends `${T}` ? S : Create<T, Increase<S>>;

type DecimalCreate<
  T extends string | number,
  S extends unknown[] = Zero
> = `${T}` extends `${infer F}${infer R}`
  ? DecimalCreate<R, Add<MultiTen<S>, Create<F>>>
  : S;

type MinusOne<T extends number> = GetLength<Decrease<DecimalCreate<T>>>;
