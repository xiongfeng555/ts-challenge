<!--
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-12 16:39:01
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-12 16:40:16
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\ts-challenge\type-challenges\AnyOf\readme.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

> 在类型系统中实现类似于 Python 中 any 函数。类型接收一个数组，如果数组中任一个元素为真，则返回 true，否则返回 fasle。如果数组为空，返回 false。

例如：

```ts
type Sample1 = AnyOf<[1, "", false, [], {}]>; // expected to be true.
type Sample2 = AnyOf<[0, "", false, [], {}]>; // expected to be false.
```
