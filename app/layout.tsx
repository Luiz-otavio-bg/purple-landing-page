import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/ui/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Purple",
  description: "roxo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={` ${poppins.className}  antialiased`}>
      <body className="font-sans antialiased">
        <div className="min-h-screen  bg-purple"> 
          <Navbar />
          <main>
            {children}
            
          </main>

        </div>
      </body>
    </html>
  );
}
