type Unique<T extends any[], U extends any[] = []> = T extends [
  infer A,
  ...infer B
]
  ? IndexOf<U, A> extends -1
    ? Unique<B, [...U, A]>
    : Unique<B, U>
  : U;
