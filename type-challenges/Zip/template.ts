/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-15 19:40:49
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-15 19:52:31
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\ts-challenge\type-challenges\Zip\template.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
type mergeToOne<T extends any, U extends any> = [T, U];
type Zip<T extends any[], U extends any[]> = T extends [infer a, ...infer b]
  ? U extends [infer c, ...infer d]
    ? [mergeToOne<a, c>, ...Zip<b, d>]
    : []
  : [];
