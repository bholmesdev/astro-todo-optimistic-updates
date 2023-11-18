export let todos: string[] = [];

export function shuffleTodos() {
  todos = todos.sort(() => Math.random() - 0.5);
}
