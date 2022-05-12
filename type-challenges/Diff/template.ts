/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-11 21:23:23
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-12 16:32:04
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\ts-challenge\type-challenges\Diff\template.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
type Diff<F extends Record<any, any>, S extends Record<any, any>> = {
  [key in Exclude<keyof (F & S), keyof (F | S)>]: key extends keyof F
    ? F[key]
    : key extends keyof S
    ? S[key]
    : never;
};

//测试代码
type test<T, S> = keyof (T | S);
type test1<T, S> = keyof (T & S);
