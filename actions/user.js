"use server"
import { db } from "@/lib/prisma"
import { auth, clerkClient } from "@clerk/nextjs/server"
export async function updateUserName(userName) {
    const { userId } = auth();
    if (!userId) { throw new Error("unauthourized"); }
    const existingUserName = await db.user.findUnique({
        where: { userName }
    })
    if (existingUserName && existingUserName.clerkUserId !== userId) {
        throw new Error("username is already taken");
    }
    await db.user.update({
        where: { clerkUserId: userId },
        data: { userName }
    });
    await clerkClient.users.updateUser(userId, {
        username: userName
    });
    return { success: true }
}