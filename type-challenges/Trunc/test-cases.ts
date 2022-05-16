/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-16 20:08:56
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-16 20:09:16
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\ts-challenge\type-challenges\Trunc\test-cases.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { Equal, Expect } from "@type-challenges/utils";
import { ExpectFalse, NotEqual } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Trunc<0.1>, "0">>,
  Expect<Equal<Trunc<1.234>, "1">>,
  Expect<Equal<Trunc<12.345>, "12">>,
  Expect<Equal<Trunc<-5.1>, "-5">>,
  Expect<Equal<Trunc<"1.234">, "1">>,
  Expect<Equal<Trunc<"-10.234">, "-10">>,
  Expect<Equal<Trunc<10>, "10">>
];
