/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-14 19:17:44
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-14 19:31:04
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\ts-challenge\type-challenges\RequiredByKeys\template.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
type RequiredByKeys<T, K extends keyof T | "unknown" = keyof T> = Merge1<
  {
    [key in keyof T as key extends K ? key : never]-?: T[key];
  } & {
    [s in Exclude<keyof T, K>]?: T[s];
  }
>;
