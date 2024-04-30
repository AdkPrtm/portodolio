import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_WEBSITE_URL}`),

  title: 'Andhika Portfolio',
  authors: {
    name: "Andhika Pratama",
  },

  description:
    "Based in East Kalimantan, I'm a Fullstack developer passionate about building a moderm web and mobile application that users love.",
  openGraph: {
    title: "Andhika Portfolio",
    description:
      "Based in East Kalimantan, I'm a Fullstack developer passionate about building a moderm web and mobile application that users love.",
    url: process.env.NEXT_WEBSITE_URL,
    siteName: "Andhika Portfolio",
    images: "/image/homescreen.png",
    type: "website",
  },
  keywords: ["andhika portfolio", "adkprtm", "andhka pratama"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressContentEditableWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
