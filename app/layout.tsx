import Header from "@/components/home/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/home/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kings League",
  description: "A basketball league for the community",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto px-4">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
