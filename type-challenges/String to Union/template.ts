/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-11 19:56:08
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-11 20:02:45
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\ts-challenge\type-challenges\String to Union\template.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
type StringToUnion<T extends string,A extends string[]=[]> = T extends `${infer first}${infer rest}` ? StringToUnion<rest,[...A,first]> : A[number]