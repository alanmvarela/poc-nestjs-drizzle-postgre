import type { Config } from "drizzle-kit";
 
export default {
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  "breakpoints": true,
} satisfies Config;