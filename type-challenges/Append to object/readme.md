<!--
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-11 18:56:11
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-11 18:57:38
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\ts-challenge\type-challenges\Append to object\readme.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
> 实现一个为接口添加一个新字段的类型。该类型接收三个参数，返回带有新字段的接口类型。

例如:

```ts
type Test = { id: '1' }
type Result = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }