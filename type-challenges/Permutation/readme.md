<!--
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-11 17:00:07
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-11 17:00:44
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\ts-challenge\type-challenges\Permutation\readme.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
实现联合类型的全排列，将联合类型转换成所有可能的全排列数组的联合类型。

```typescript
type perm = Permutation<'A' | 'B' | 'C'>; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']
```
