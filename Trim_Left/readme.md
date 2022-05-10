<!--
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-10 19:35:46
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-10 19:36:17
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\ts-challenge\Trim_Left\readme.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
实现 TrimLeft<T> ，它接收确定的字符串类型并返回一个新的字符串，其中新返回的字符串删除了原字符串开头的空白字符串。

例如

type trimed = TrimLeft<'  Hello World  '> // 应推导出 'Hello World  '