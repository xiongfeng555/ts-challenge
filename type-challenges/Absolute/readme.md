<!--
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-11 19:36:36
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-11 19:37:15
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\ts-challenge\type-challenges\Absolute\readme.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
>实现一个接收string,number或bigInt类型参数的Absolute类型,返回一个正数字符串。

例如
```ts
type Test = -100;
type Result = Absolute<Test>; // expected to be "100"