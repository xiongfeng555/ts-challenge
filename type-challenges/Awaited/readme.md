<!--
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-07 19:39:19
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-07 19:39:31
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\ts-challenge\type-challenges\Awaited\readme.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
假如我们有一个 Promise 对象，这个 Promise 对象会返回一个类型。在 TS 中，我们用 Promise<T> 中的 T 来描述这个 Promise 返回的类型。请你实现一个类型，可以获取这个类型。

比如：`Promise<ExampleType>`，请你返回 ExampleType 类型。

> 这个挑战来自于 [@maciejsikora](https://github.com/maciejsikora) 的文章：[original article](https://dev.to/macsikora/advanced-typescript-exercises-question-1-45k4)