<!--
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-12 19:30:57
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-12 19:31:31
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\ts-challenge\type-challenges\IsUnion\readme.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

> Implement a type IsUnion, which takes an input type T and returns whether T resolves to a union type.

For example:

```ts
type case1 = IsUnion<string>; // false
type case2 = IsUnion<string | number>; // true
type case3 = IsUnion<[string | number]>; // false
```
