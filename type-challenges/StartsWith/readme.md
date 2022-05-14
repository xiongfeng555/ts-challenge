<!--
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-14 16:43:03
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-14 16:43:45
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\ts-challenge\type-challenges\StartsWith\readme.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

> Implement StartsWith<T, U> which takes two exact string types and returns whether T starts with U

For example

```ts
type a = StartsWith<"abc", "ac">; // expected to be false
type b = StartsWith<"abc", "ab">; // expected to be true
type c = StartsWith<"abc", "abcd">; // expected to be false
```
