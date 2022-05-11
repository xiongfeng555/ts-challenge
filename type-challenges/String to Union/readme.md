<!--
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-11 19:56:26
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-11 19:56:44
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\ts-challenge\type-challenges\String to Union\readme.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
实现一个将接收到的String参数转换为一个字母Union的类型。

例如

type Test = '123';
type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"