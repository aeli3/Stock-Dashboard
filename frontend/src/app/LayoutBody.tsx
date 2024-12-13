import { AppSidebar } from "@/components/AppSidebar";
import Login from "@/components/Login";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useAuth } from "@/hooks/useAuth";

type LayoutBodyProps = { children: React.ReactNode };

export default function LayoutBody({ children }: LayoutBodyProps) {
    const { isAuthenticated } = useAuth();

    return (
        <html lang="en">
          <body>
            {isAuthenticated ? (
              <SidebarProvider>
                <AppSidebar />
                <main className="bg-[#F5F7F9] w-full">{children}</main>
              </SidebarProvider>
            ) : (
              <div className="flex w-screen h-screen justify-center items-center">
                <Login />
              </div>
            )}
          </body>
        </html>
    )
}