import Link from "next/link"
import Image from "next/image";
import { Button } from "./ui/button";
import { LogIn, PenBox } from "lucide-react"
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import UserMenu from "./UserMenu";
import { checkUser } from "@/lib/checkUser";
const Header = async () => {
    await checkUser();
    return (
        <nav className="mx-auto md:py-1 py-5 px-4 flex justify-between items-center shadow-md border-b-2 bg-white">
            <Link href={"/"} className="flex items-center">
                <Image alt="logo" src={'/logo.png'} width={80} height={30} className="md:h-16 w-auto h-10" />
            </Link>
            <div className="flex items-center gap-3">
                <Link href={"/events?create=true"}>
                    <Button className="flex items-center gap-2"><PenBox size="18" />Create Event</Button>
                </Link>
                <SignedOut>
                    <SignInButton forceRedirectUrl="/dashboard">
                        <Button className="flex items-center justify-center gap-2" variant="outline"><LogIn size="18" />Login</Button>
                    </SignInButton>
                </SignedOut>
                <SignedIn>
                    <UserMenu />
                </SignedIn>
            </div>

        </nav>
    )
}

export default Header;