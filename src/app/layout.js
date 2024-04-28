import { Inter } from "next/font/google";
import { ThemeProvider } from "@providers/ThemeProvider";
import Navbar from "@components/Navbar";

import "@styles/globals.css";
import Cursor from "@components/ui/cursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI | FrontEnd Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <Cursor />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
