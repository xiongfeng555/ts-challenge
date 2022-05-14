<!--
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-14 19:32:22
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-14 19:32:51
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\ts-challenge\type-challenges\Mutable\readme.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

> Implement the generic Mutable<T> which makes all properties in T mutable (not readonly).

For example

```ts
interface Todo {
  readonly title: string;
  readonly description: string;
  readonly completed: boolean;
}

type MutableTodo = Mutable<Todo>; // { title: string; description: string; completed: boolean; }
```
