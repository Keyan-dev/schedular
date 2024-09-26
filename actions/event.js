"use server"
import { db } from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server";
import { eventSchema } from "@/lib/validators"
export async function createEvent(data) {
    const { userId } = auth();
    if (!userId) throw new Error("unauthourized");
    const validatedData = eventSchema.parse(data);
    const user = await db.user.findUnique({ where: { clerkUserId: userId } });
    if (!user) throw new Error("user not found");
    const event = await db.event.create({data: {...validatedData,userId: user.id}});
    return event;
}
export async function getUserEvents() {
    const { userId } = auth();
    if (!userId) throw new Error("unauthourized");
    const user = await db.user.findUnique({ where: { clerkUserId: userId } });
    if (!user) throw new Error("user not found");
    const events = await db.event.findMany({where: {userId: user.id},orderBy:{createdAt:"desc"},include:{_count:{
        select:{booking:true}
    }}});
    return {events,userName:user.userName};
}

export async function deleteEvent(eventId){
    const { userId } = auth();
    if (!userId) throw new Error("unauthourized");
    const user = await db.user.findUnique({ where: { clerkUserId: userId } });
    if (!user) throw new Error("user not found");
    const deleteEvent=await db.event.delete({where:{id:eventId,userId:user.id}});
    return deleteEvent;
}