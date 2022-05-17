type popArray<T extends any[]> = T extends [...infer A, infer B] ? A : [];
type LastIndexOf<T extends any[], U, L extends any[] = T> = T extends [
  ...infer A,
  infer B
]
  ? Equal<U, B> extends true
    ? popArray<L>["length"]
    : LastIndexOf<A, U, popArray<L>>
  : -1;
