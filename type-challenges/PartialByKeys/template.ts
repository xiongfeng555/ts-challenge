// type PartialByKeys<T, K extends keyof T | 'unknown' = keyof T> = Merge1<{
//     [P in keyof T as P extends K ? P:never]?:T[P]
// } & {
//     [S in Exclude<keyof T,K>]:T[S]
// }>
type Merge1<T> = {
  [p in keyof T]: T[p];
};
interface User {
  name: string;
  age: number;
  address: string;
}

type PartialByKeys<T, K extends keyof T | "unknown" = keyof T> = Merge1<
  {
    [P in keyof T as P extends K ? P : never]?: T[P];
  } & {
    [S in Exclude<keyof T, K>]: T[S];
  }
>;
type a = PartialByKeys<User, "name">;
