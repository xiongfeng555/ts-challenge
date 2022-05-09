<!--
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-09 20:25:20
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-09 20:26:01
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\ts-challenge\type-challenges\Last_of_Array\readme.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
> 由谷歌自动翻译，欢迎 PR 改进翻译质量。

>在此挑战中建议使用TypeScript 4.0

实现一个通用`Last<T>`，它接受一个数组`T`并返回其最后一个元素的类型。

例如

```ts
type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type tail1 = Last<arr1> // expected to be 'c'
type tail2 = Last<arr2> // expected to be 1
```
