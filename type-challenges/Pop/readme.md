<!--
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-09 20:30:55
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-09 20:31:26
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\ts-challenge\type-challenges\Pop\readme.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
> 由谷歌自动翻译，欢迎 PR 改进翻译质量。

>在此挑战中建议使用TypeScript 4.0

实现一个通用`Pop<T>`，它接受一个数组`T`并返回一个没有最后一个元素的数组。

例如

```ts
type arr1 = ['a', 'b', 'c', 'd']
type arr2 = [3, 2, 1]

type re1 = Pop<arr1> // expected to be ['a', 'b', 'c']
type re2 = Pop<arr2> // expected to be [3, 2]
```