import { Config } from "drizzle-kit";
import "dotenv/config";

const databaseAuthToken = process.env.DATABASE_AUTH_TOKEN || "";
const databaseUrl = process.env.DATABASE_URL || "";

export default {
  schema: ["./db/schema/user.ts", "./db/schema/token.ts"],
  driver: "turso",
  dbCredentials: {
    url: databaseUrl,
    authToken: databaseAuthToken,
  },
} satisfies Config;
