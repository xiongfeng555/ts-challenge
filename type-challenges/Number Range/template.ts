type NumberRange<
  L extends number,
  H extends number,
  C extends number = L,
  R extends any[] = []
> = C extends H ? [...R, C][number] : NumberRange<L, H, add<C>, [...R, C]>;
