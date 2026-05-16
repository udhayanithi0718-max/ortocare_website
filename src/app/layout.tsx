import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orthocare Physiotherapy Hospital | Kanchipuram",
  description: "Advanced Physiotherapy & Robotic Decompression Therapy in Kanchipuram. Move Better. Live Pain Free.",
  keywords: ["Best Physiotherapy Hospital in Kanchipuram", "Neck Pain Treatment Kanchipuram", "Robotic Decompression Therapy"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col font-sans bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
