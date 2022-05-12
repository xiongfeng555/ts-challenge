<!--
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-11 21:23:33
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-12 16:19:02
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\ts-challenge\type-challenges\Diff\readme.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

> 获取两个接口类型中的差值属性。

```ts
type Foo = {
  a: string;
  b: number;
};
type Bar = {
  a: string;
  c: boolean;
};

type Result1 = Diff<Foo, Bar>; // { b: number, c: boolean }
type Result2 = Diff<Bar, Foo>; // { b: number, c: boolean }
```
