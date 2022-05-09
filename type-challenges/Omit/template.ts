/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-09 18:35:01
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-09 18:46:10
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\ts-challenge\type-challenges\Omit\template.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
type templatePick<T,K extends keyof T> = {
    [P in K]:T[P]
}
type templateExclude<T,K> = T extends K ? never : T 
type MyOmit<T, K extends keyof T> = templatePick<T,templateExclude<keyof T,K>>;