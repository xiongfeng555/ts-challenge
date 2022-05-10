/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-10 20:38:59
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-10 21:05:50
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\ts-challenge\type-challenges\ReplaceAll\template.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
type ReplaceAll<S extends string, From extends string, To extends string> = S extends `${infer F}${From}${infer B}` ? From extends '' ? S : `${F}${To}${ReplaceAll<`${B}`,From,To>}` : S