import { Config } from "drizzle-kit";

export default {
  schema: [
    "./db/schema/schema.ts",
    "./db/schema/user.ts",
    "./db/schema/token.ts",
  ],
  driver: "turso",
  dbCredentials: {
    url: "libsql://amazon-price-tracker-palubaitis.turso.io",
    authToken:
      "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MTExMjI3NzgsImlkIjoiNjQ3NGFiMmQtZDJjYS00OTk0LTljYjMtYWM3MWI1NTc1ZGE3In0.0wcjMPPFE3B_nbilwaq66U2w-otI7-P3VUL12bQQsUr5_ZTefGTqTonJsLJWXGCY9o1Z-bPbrcpLM8eDnmJMCA",
  },
} satisfies Config;
