/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-07 19:22:42
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-24 11:12:00
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\ts-challenge\type-challenges\Awaited\template.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer K>
  ? K extends Promise<unknown>
    ? MyAwaited<K>
    : K
  : never;
