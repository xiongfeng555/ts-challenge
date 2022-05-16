type numberToArray<
  A extends number,
  B extends number[] = []
> = B["length"] extends A ? B : numberToArray<A, [...B, 0]>;

type PopArray<A extends any[]> = A extends [any, ...infer B] ? B : never;

type Compare2<T extends any[], U extends any[]> = T extends []
  ? U extends []
    ? "equal"
    : "small"
  : U extends []
  ? "big"
  : Compare2<PopArray<T>, PopArray<U>>;

type Compare<T extends number, U extends number> = Compare2<
  numberToArray<T>,
  numberToArray<U>
>;

// ---- utils ------

type Fill<
  A extends unknown[],
  B,
  C extends number = 0,
  D extends number = A["length"],
  E extends unknown[] = []
> = C extends D
  ? A
  : Compare<E["length"], A["length"]> extends "equal"
  ? E
  : Compare<E["length"], C> extends "big"
  ? Compare<E["length"], D> extends "small"
    ? Fill<A, B, C, D, [...E, B]>
    : Fill<A, B, C, D, [...E, A[E["length"]]]>
  : Compare<E["length"], C> extends "equal"
  ? Fill<A, B, C, D, [...E, B]>
  : Fill<A, B, C, D, [...E, A[E["length"]]]>;
