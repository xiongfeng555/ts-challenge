<!--
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-15 15:14:27
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-15 15:14:43
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\ts-challenge\type-challenges\InorderTraversal\readme.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

> Implement the type version of binary tree inorder traversal.

For example:

```ts
const tree1 = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: null,
  },
} as const;

type A = InorderTraversal<typeof tree1>; // [1, 3, 2]
```
