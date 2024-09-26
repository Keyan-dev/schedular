import { ReactNode, Suspense } from "react";
interface AvailabilityLayoutProps {
    children: ReactNode;
}
export default function AvailabilityLayout({ children }: AvailabilityLayoutProps) {
    return (
        <div>
            <Suspense fallback={<div>Loading availability...</div>}>
                {children}
            </Suspense>
        </div>
    )
}