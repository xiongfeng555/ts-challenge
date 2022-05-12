/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-12 18:45:20
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-12 19:22:34
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\ts-challenge\type-challenges\isNever\template.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
type IsNever<T> = [T] extends [never] ? true : false;

//在条件判断类型的定义中，将泛型参数使用[]括起来，即可阻断条件判断类型的分配，此时，传入参数T的类型将被当做一个整体，不再分配
