// your answers
type IsFalsy<T extends any> = T extends
  | Record<string, never>
  | []
  | 0
  | ""
  | false
  ? true
  : false;

type AnyOf<T extends readonly any[]> = IsFalsy<T[number]> extends true
  ? false
  : true;
// IsFalsy<T[number]>是且嘛？很神奇？
