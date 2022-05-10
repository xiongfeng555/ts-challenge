<!--
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-10 20:39:10
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-10 20:39:38
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\ts-challenge\type-challenges\ReplaceAll\readme.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
实现 ReplaceAll<S, From, To> 将一个字符串 S 中的所有子字符串 From 替换为 To。

例如

type replaced = ReplaceAll<'t y p e s', ' ', ''> // 期望是 'types'