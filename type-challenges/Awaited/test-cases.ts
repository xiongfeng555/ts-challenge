/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-07 19:22:49
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-07 19:23:11
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\ts-challenge\type-challenges\Awaited\test-cases.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { Equal, Expect } from '@type-challenges/utils'

type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>,
]

// @ts-expect-error
type error = MyAwaited<number>