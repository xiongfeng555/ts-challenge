<!--
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-15 15:25:03
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-15 15:25:24
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\ts-challenge\type-challenges\Flip\readme.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

> Implement the type of just-flip-object. Examples:

```ts
Flip<{ a: "x", b: "y", c: "z" }>; // {x: 'a', y: 'b', z: 'c'}
Flip<{ a: 1, b: 2, c: 3 }>; // {1: 'a', 2: 'b', 3: 'c'}
flip<{ a: false, b: true }>; // {false: 'a', true: 'b'}
```

> No need to support nested objects and values which cannot be object keys such as arrays
