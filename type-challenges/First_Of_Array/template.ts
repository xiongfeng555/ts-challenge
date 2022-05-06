// 1
// type First<T extends any[]> = T extends [] ? never : T[0]

// 2

// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]

// 3
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never
// T[number] => union 


//4
type First<T extends any[]> = T extends [infer first,...infer Rest] ? first : never
// infer 推断
// 看是否能解构出一个first，能就返回first，没有就返回never

