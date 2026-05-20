import { env } from "../config/env";

export class HttpError extends Error {
  constructor(public status: number, message: string) { super(message); }
}

export async function http<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${env.API_BASE_URL}${path}`, {
    ...init,
    headers: { "content-type": "application/json", ...(init?.headers ?? {}) },
  });
  if (!res.ok) throw new HttpError(res.status, `Request failed: ${res.status}`);
  return (await res.json()) as T;
}
