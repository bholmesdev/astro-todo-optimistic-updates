export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function xd(data: any) {
  return JSON.stringify(data);
}
