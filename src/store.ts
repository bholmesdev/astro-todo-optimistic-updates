import { z } from "astro/zod";

const todoSchema = z.object({
  id: z.string(),
  text: z.string(),
  completed: z.boolean(),
});

export const formDataSchema = z.union([
  z.object({
    type: z.literal("create"),
    text: z.string(),
    id: z.string().optional(),
  }),
  z.object({
    type: z.literal("update"),
    id: z.string(),
    text: z.string().optional(),
    completed: z
      .enum(["true", "false"])
      .optional()
      .transform((val) => val === "true"),
  }),
]);

export type Todo = z.infer<typeof todoSchema>;

export let todos: Todo[] = [];

export function shuffleTodos() {
  todos = todos.sort(() => Math.random() - 0.5);
}
