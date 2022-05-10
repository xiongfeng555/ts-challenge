<!--
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-10 20:00:23
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-10 20:00:49
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\ts-challenge\type-challenges\Replace\readme.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
实现 Replace<S, From, To> 将字符串 S 中的第一个子字符串 From 替换为 To 。

例如

type replaced = Replace<'types are fun!', 'fun', 'awesome'> // 期望是 'types are awesome!'