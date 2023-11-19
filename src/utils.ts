import type { ZodType } from "astro/zod";
import { customAlphabet, urlAlphabet } from "nanoid";

export const genId = customAlphabet(urlAlphabet, 10);

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function xd(data: any) {
  return JSON.stringify(data);
}

export function parseFormData<T extends ZodType<any>>(
  formData: FormData,
  schema: T
): T["_output"] {
  const obj = Object.fromEntries(formData.entries());
  return schema.parse(obj);
}
