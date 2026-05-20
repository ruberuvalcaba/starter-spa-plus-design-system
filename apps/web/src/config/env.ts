export const env = {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL ?? "https://jsonplaceholder.typicode.com",
} as const;
