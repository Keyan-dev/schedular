"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useUser } from "@clerk/nextjs"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userNameSchema } from '@/lib/validators'
import { useEffect } from "react";
import { updateUserName } from "@/actions/user";
import useFetch from "@/hooks/use-fetch";
import { PulseLoader } from "react-spinners";
const Dashboard = () => {
    const { isLoaded, user } = useUser();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm({ resolver: zodResolver(userNameSchema) });
    console.log(user);
    const {
        loading, error, fn: fnupdateUserName
    } = useFetch(updateUserName)
    useEffect(() => {
        setValue("userName", user?.username);
    }, [isLoaded]);
    const onSubmit = async (data) => {
        console.log("formdata", data)
        fnupdateUserName(data?.userName);
    }
    return (
        <div className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>
                        Welcome, {user?.firstName}
                    </CardTitle>
                </CardHeader>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>
                        Your Unique Link
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <div className="flex items-center gap-2">
                                <span>{window.location.origin}/</span>
                                <Input {...register("userName")} placeholder="username" />
                            </div>
                            {errors.userName && (
                                <p className="text-red-500 text-sm mt-1">{`${errors?.userName?.message}`}</p>
                            )}
                            {error && (
                                <p className="text-red-500 text-sm mt-1">{`${error?.message}`}</p>
                            )}
                        </div>
                        <Button>{loading && (<PulseLoader className="" size={10} color="#f5f5f5" />)} {!loading && "Update username"}</Button>
                    </form>
                </CardContent>
            </Card>

        </div>
    )
}

export default Dashboard