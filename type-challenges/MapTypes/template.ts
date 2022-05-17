type MapTypes<
  T extends Record<any, any>,
  R extends Record<"mapFrom" | "mapTo", any>,
  U = R
> = {
  [key in keyof T]: Equal<T[key], R["mapFrom"]> extends true
    ? R["mapTo"]
    : T[key] extends R["mapFrom"]
    ? U extends R
      ? Equal<T[key], U["mapFrom"]> extends true
        ? U["mapTo"]
        : never
      : never
    : T[key];
};
