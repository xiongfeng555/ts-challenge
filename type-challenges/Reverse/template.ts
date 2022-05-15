type Reverse<T extends any[], U extends any[] = []> = T extends [
  ...infer a,
  infer b
]
  ? Reverse<a, [...U, b]>
  : U;
