/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-13 10:43:50
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-13 10:57:10
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\ts-challenge\type-challenges\ReplaceKeys\template.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
type ReplaceKeys<
  U extends Record<string, unknown>,
  T extends string,
  Y extends Record<string, unknown>
> = {
  [key in keyof U]: key extends T
    ? key extends keyof Y
      ? Y[key]
      : never
    : U[key];
};
