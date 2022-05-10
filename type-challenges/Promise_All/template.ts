/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-09 20:35:12
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-09 21:36:26
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\ts-challenge\type-challenges\Promise_All\template.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
declare function PromiseAll<T extends any[]>(values:readonly [...T]): Promise<{[K in keyof T]: T[K] extends Promise<infer R> ? R : T[K]}>

type arr = {
    0:'a',
    1:'b'
} extends Array<string> ? true : false
