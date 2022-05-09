/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-09 18:35:48
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-09 18:36:08
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\ts-challenge\type-challenges\Omit\test-cases.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
  Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>,
]

// @ts-expect-error
type error = MyOmit<Todo, 'description' | 'invalid'>

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
  completed: boolean
}

interface Expected2 {
  title: string
}