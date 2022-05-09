/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-09 19:05:38
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-09 19:30:16
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\ts-challenge\type-challenges\DeepOnly\template.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
type DeepReadonly<T> = {
  readonly [key in keyof T]: (keyof T[key]) extends never
    ? T[key]
    : DeepReadonly<T[key]>
}

