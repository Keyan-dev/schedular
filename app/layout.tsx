import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs"
import Header from "@/components/Header";

const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: "schedular",
  description: "Meeting Scheduling App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {/* header */}
          <Header />
          <main className="md:min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {children}
          </main>
          {/* footer */}
          <footer className="bg-blue-100 py-5">
            <div className="container mx-auto px-4 text-center text-gray-600"><p>Made with ❤️ by Keyan</p></div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
