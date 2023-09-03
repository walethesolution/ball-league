import Header from "@/components/home/Header";
import "./globals.css";
import { Alegreya } from "next/font/google";
import Footer from "@/components/home/Footer";

const alegreya = Alegreya({ subsets: ["latin"] });

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
      <body className={alegreya.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
