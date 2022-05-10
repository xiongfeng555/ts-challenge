/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-10 19:49:33
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-10 19:57:45
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\ts-challenge\type-challenges\Capitalize\template.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
type Letter = {
    a: 'A'
    b: 'B'
    c: 'C'
    d: 'D'
    e: 'E'
    f: 'F'
    g: 'G'
    h: 'H'
    i: 'I'
    j: 'J'
    k: 'K'
    l: 'L'
    m: 'M'
    n: 'N'
    o: 'O'
    p: 'P'
    q: 'Q'
    r: 'R'
    s: 'S'
    t: 'T'
    u: 'U'
    v: 'V'
    w: 'W'
    x: 'X'
    y: 'Y'
    z: 'Z'
  }
type MyCapitalize<S extends string> = S extends `${infer R}${infer rest}` ? R extends keyof Letter ? `${Letter[R]}${rest}`:S : S
