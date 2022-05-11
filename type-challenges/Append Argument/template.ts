/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-11 16:37:29
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-11 16:58:06
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\ts-challenge\type-challenges\Append Argument\template.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
type AppendArgument<Fn, A> = Fn extends (...args:[...infer rest])=>infer result ? (...args:[...rest,A])=>result : Fn