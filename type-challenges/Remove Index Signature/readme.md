<!--
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-13 19:13:19
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-13 19:14:04
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\ts-challenge\type-challenges\Remove Index Signature\readme.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

> Implement RemoveIndexSignature<T> , exclude the index signature from object types.

For example:

```ts
type Foo = {
  [key: string]: any;
  foo(): void;
};

type A = RemoveIndexSignature<Foo>; // expected { foo(): void }
```
