'use client'
import "./globals.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { AuthProvider } from "@/context/AuthContext";
import LayoutBody from "./LayoutBody";

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  const queryClient = new QueryClient()

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <LayoutBody>
          {children}
        </LayoutBody>
      </QueryClientProvider>
    </AuthProvider>
  );
}
