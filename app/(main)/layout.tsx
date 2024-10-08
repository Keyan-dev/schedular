"use client"
import { useUser } from "@clerk/nextjs"
import { BarChart, Calendar, Clock, Users } from "lucide-react";
import Link from "next/link"
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { BarLoader } from "react-spinners";
const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: BarChart },
    { href: "/events", label: "Events", icon: Calendar },
    { href: "/meetings", label: "Meetings", icon: Users },
    { href: "/availability", label: "Availability", icon: Clock },
];
interface AppLayoutProps {
    children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
    const { isLoaded } = useUser();
    const pathName = usePathname();
    return (<>
        {!isLoaded && <BarLoader width="100%"></BarLoader>}
        <div className="flex flex-col bg-blue-50 md:flex-row">
            <aside className="hidden md:block w-64 bg-white">
                <nav className="mt-5">
                    {navItems.map((item) => (
                        <Link href={item.href} key={item.href} className={`flex items-center px-4 py-5 text-gray-700 hover:bg-gray-100 text-xl ${pathName == item.href ? 'bg-blue-100' : ''}`}>
                            <item.icon className="w-5 h-5 mr-3"></item.icon>
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </aside>
            <main className="flex-1 overflow-y-auto h-screen p-4 md:p-8">
                <header className="flex justify-between items-center mb-4">
                    <h2 className="text-3xl md:text-4xl gradient-title pt-2 md:pt-0 text-center md:text-left w-full">
                        {navItems.find((item) => item.href == pathName)?.label || 'Dashboard '}
                    </h2>
                </header>
                {children}
            </main>
            <nav className=" md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-md">
                <ul className="flex justify-around">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Link href={item.href} className={`flex flex-col items-center px-4 py-5 ${pathName == item.href ? 'text-blue-600' : 'text-gray-600'}`}>
                                <item.icon className="w-5 h-5"></item.icon>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    </>)
}
export default AppLayout