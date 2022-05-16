type generateUnion<T extends any[] | number> = T extends any[] ? T[number] : T;
type Without<
  T extends any[],
  U extends any[] | number,
  R extends any[] = []
> = T extends [infer a, ...infer b]
  ? a extends generateUnion<U>
    ? Without<b, U, R>
    : Without<b, U, [...R, a]>
  : R;
