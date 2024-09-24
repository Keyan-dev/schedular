"use client"
import { useUser } from "@clerk/nextjs"
import { BarChart, Calendar, Clock, Users } from "lucide-react";
import Link from "next/link"
import { BarLoader } from "react-spinners";
const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: BarChart },
    { href: "/events", label: "Events", icon: Calendar },
    { href: "/meetings", label: "Meetings", icon: Users },
    { href: "/availability", label: "Availability", icon: Clock },
];
const AppLayout = ({ children }) => {
    const { isLoaded } = useUser();
    return (<>
        {!isLoaded && <BarLoader width="100%"></BarLoader>}
        <div>
            <aside>
                <nav>
                    {navItems.map((item) => (
                        <Link href={item.href} key={item.href} className="flex items-center px-4 py-7 text-gray-700 hover:bg-gray-100">
                            {item.label}
                            <item.icon></item.icon>
                        </Link>
                    ))}
                </nav>
            </aside>
        </div>
        {children}
    </>)
}
export default AppLayout