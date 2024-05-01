import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import "./color.css";

import { ClerkProvider } from "@clerk/nextjs";

import { Box, Theme } from "@radix-ui/themes";
import { ThemeProvider } from "@/components/theme";
import { Header } from "@/components/layout/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Battery Inspection Platform",
  description: "measure battery healthy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: { colorPrimary: "#73569f" },

        signIn: {
          variables: { colorPrimary: "#73569f" },
        },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Theme accentColor="iris">
              <Box className="absolute top-0 -z-10 h-full w-full">
                <Box className="absolute bottom-auto left-0 right-auto top-0 h-[300px] w-[300px] -translate-x-[30%] translate-y-[0%] rounded-full bg-[--iris-6] opacity-40 blur-[80px] dark:bg-[--iris-6]"></Box>
                <Box className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[--iris-8] opacity-50 blur-[80px] dark:bg-[--iris-6]"></Box>
              </Box>

              <Header />
              <div className="mt-header flex flex-row ">
                <aside className="hidden w-sidebar-open shrink-0 border-r lg:flex dark:border-r-[--gray-a2]"></aside>
                <main className="flex min-h-screen grow flex-col">
                  {children}
                </main>
              </div>

              {/** <ThemePanel /> */}
            </Theme>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
