type MyPick<T, K extends keyof T> = {
    [P in K]:T[P]
}
// K extends keyof T 类型约束，K必须包含在T的key集合里