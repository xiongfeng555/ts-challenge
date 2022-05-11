type Flatten<S extends any[], T extends any[] = []> = S extends [
  infer F,
  ...(infer B)
]
  ? F extends any[]
    ? [...Flatten<F>, ...Flatten<B>]
    : [F, ...Flatten<B>]
  : []
