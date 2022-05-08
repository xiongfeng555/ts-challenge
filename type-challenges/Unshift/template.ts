/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-08 20:24:03
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-08 20:24:51
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\ts-challenge\type-challenges\Unshift\template.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
type Unshift<T extends unknown[], U> = [U,...T]