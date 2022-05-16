type Trunc<T extends number | string> = `${T}` extends `${infer F}.${any}`
  ? F
  : `${T}`;
