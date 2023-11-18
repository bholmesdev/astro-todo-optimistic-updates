export type Todo = {
  text: string;
  completed: boolean;
};

export let todos: Todo[] = [];

export function shuffleTodos() {
  todos = todos.sort(() => Math.random() - 0.5);
}
