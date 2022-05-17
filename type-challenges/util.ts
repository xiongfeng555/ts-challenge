// 实现加一
type add<T extends number, R extends any[] = []> = R["length"] extends T
  ? [...R, 0]["length"]
  : add<T, [...R, 0]>;
