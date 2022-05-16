/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-16 20:30:39
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-16 20:46:56
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\ts-challenge\type-challenges\Join\test-cases.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { Equal, Expect } from "@type-challenges/utils";
import { ExpectFalse, NotEqual } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Join<["a", "p", "p", "l", "e"], "-">, "a-p-p-l-e">>,
  Expect<Equal<Join<["Hello", "World"], " ">, "Hello World">>,
  Expect<Equal<Join<["2", "2", "2"], 1>, "21212">>,
  Expect<Equal<Join<["o"], "u">, "o">>
];
