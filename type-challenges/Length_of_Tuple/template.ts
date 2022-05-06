type Length<T extends readonly any[]> = T['length']

// 普通数组的length属性是个number类型
// tuple的length是个固定的数字，也是个number类型