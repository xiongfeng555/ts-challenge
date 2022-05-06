type MyExclude<T, U> = T extends U ? never : T
// extends 是分布式的
// never表示空