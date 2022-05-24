/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-16 19:55:01
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-16 20:01:27
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\ts-challenge\type-challenges\Without\test-cases.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>
];