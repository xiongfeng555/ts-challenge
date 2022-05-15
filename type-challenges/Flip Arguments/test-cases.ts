/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-15 14:19:11
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-15 14:19:27
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\ts-challenge\type-challenges\Flip Arguments\test-cases.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<FlipArguments<() => boolean>, () => boolean>>,
  Expect<
    Equal<FlipArguments<(foo: string) => number>, (foo: string) => number>
  >,
  Expect<
    Equal<
      FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>,
      (arg0: boolean, arg1: number, arg2: string) => void
    >
  >
];
