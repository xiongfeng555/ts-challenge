type IsUnion<T, U = T> = T extends U ? ([U] extends [T] ? false : true) : never;

//tips
//1.T extends U  这里会触发分布式条件判断，所以后面的[U] extends [T]中的T是单独类型，而U是整体类型
