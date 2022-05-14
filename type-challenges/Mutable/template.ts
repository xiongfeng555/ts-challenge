type Mutable<T extends object> = {
  -readonly [key in keyof T]: T[key];
};
interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}

type c = Mutable<Readonly<Todo1>>;
