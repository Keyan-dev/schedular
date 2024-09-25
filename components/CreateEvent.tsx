"use client";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer"
import { Button } from "./ui/button"
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
const CreateEvent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const searchParams = useSearchParams();
    const router = useRouter();
    const handleClose = () => {
        setIsOpen(false);
        if (searchParams.get('create') === "true") {
            router.replace(window?.location?.pathname);
        }
    }
    useEffect(() => {
        const create = searchParams.get("create");
        if (create) setIsOpen(true);
    }, [searchParams])
    return (
        <Drawer open={isOpen} onClose={handleClose}>
            <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                        <DrawerTitle>Create new Event</DrawerTitle>
                        <DrawerDescription>you can create new event here</DrawerDescription>
                    </DrawerHeader>
                    <div>drawer content</div>
                    <DrawerFooter>
                        <DrawerClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}

export default CreateEvent