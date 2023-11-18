import type { APIRoute } from "astro";
import { todos } from "../store";

export const PATCH: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const todo = formData.get("todo");
  if (typeof todo !== "string") {
    return new Response(null, { status: 400 });
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));
  todos.splice(todos.indexOf(todo), 1);

  return new Response();
};
