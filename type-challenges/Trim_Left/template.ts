/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-10 19:35:34
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-10 19:40:26
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\ts-challenge\Trim_Left\template.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
type TrimLeft<S extends string> = S extends `${' ' | '\n' | '\t'}${infer R}` ? TrimLeft<R> : S
// 真没想到可以用${}