type FlattenDepth<
  T extends any[],
  num extends number = 1,
  U extends any[] = []
> = U["length"] extends num
  ? T
  : T extends [infer A, ...infer B]
  ? A extends any[]
    ? [...FlattenDepth<A, num, [1, ...U]>, ...FlattenDepth<B, num, U>]
    : [A, ...FlattenDepth<B, num, U>]
  : [];
