
type If<C extends boolean, T, F> = C extends true ? T : F
 
// null 在严格模式下和非严格模式下的区别
//https://www.typescriptlang.org/docs/handbook/type-compatibility.html#handbook-content 