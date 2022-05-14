/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-14 21:26:05
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-14 21:46:17
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\ts-challenge\type-challenges\Tuple to Nested Object\template.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
type TupleToNestedObject<T extends any[], U> = T extends [infer x, ...infer y]
  ? {
      [k in x as T[0]]: TupleToNestedObject<y, U>;
    }
  : U;
