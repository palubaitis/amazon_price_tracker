import { tokens } from "db/schema/token";
import { users } from "db/schema/user";
import { db } from "~/services/db.server";
import { eq } from "drizzle-orm";

export type Token = typeof tokens.$inferSelect;
export type NewToken = typeof tokens.$inferInsert;

export async function createToken(token: NewToken) {
  const returnedTokens = await db.insert(tokens).values(token).returning();
  return returnedTokens[0];
}

export async function deleteTokenAndGetUserId(token: string) {
  const deletedTokens: { user_id: number }[] = await db
    .delete(tokens)
    .where(eq(tokens.id, token))
    .returning({ user_id: tokens.user_id });

  if (!deletedTokens.length) return false;
  const deletedToken = deletedTokens[0];

  return deletedToken.user_id;
}