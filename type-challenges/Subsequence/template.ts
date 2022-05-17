type Subsequence<T extends any[], U extends any[] = []> = T extends [
  infer a,
  ...infer b
]
  ? Subsequence<b, U | [...U, a]>
  : U;
