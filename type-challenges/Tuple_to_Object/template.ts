type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P
}
//总结
// 1.ts中遍历一个数组，常用 T[number]来遍历
// 2.as const 解决字面量类型（把数组里面的每一项变成只读类型）
// 3.typeof 用于把js装成ts类型
