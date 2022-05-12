/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-11 21:23:29
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-12 16:31:56
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\ts-challenge\type-challenges\Diff\test-cases.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { Equal, Expect } from "@type-challenges/utils";

type Foo = {
  name: string;
  age: string;
};
type Bar = {
  name: string;
  age: string;
  gender: number;
};
type Coo = {
  name: string;
  gender: number;
};

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
  Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
  Expect<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>
];

//测试代码
type a = Exclude<keyof (Foo & Bar), keyof (Foo | Bar)>;
type b = Foo & Bar;
type c = test<Foo, Bar>;
type d = test1<Foo, Bar>;
