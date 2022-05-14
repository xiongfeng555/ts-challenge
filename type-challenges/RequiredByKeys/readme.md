<!--
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-14 19:18:06
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-14 19:18:39
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\ts-challenge\type-challenges\RequiredByKeys\readme.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

> Implement a generic RequiredByKeys<T, K> which takes two type argument T and K.

K specify the set of properties of T that should set to be required. When K is not provided, it should make all properties required just like the normal Required<T>.

For example

```ts
interface User {
  name?: string;
  age?: number;
  address?: string;
}

type UserPartialName = RequiredByKeys<User, "name">; // { name: string; age?: number; address?: string }
```
