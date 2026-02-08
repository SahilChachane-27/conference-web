'use client';
import React, { useEffect } from 'react';
import { redirect } from 'next/navigation';
import { LogOut, Settings, Ticket } from 'lucide-react';
import { useUser } from '@/firebase/auth/use-user';
import { useAuth } from '@/firebase';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FirebaseClientProvider } from '@/firebase/client-provider';

function AdminLayoutContent({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useUser();
  const auth = useAuth();
  const pathname = usePathname();

  useEffect(() => {
    if (!isLoading && !user) {
      redirect('/login');
    }
  }, [isLoading, user]);

  if (isLoading || !user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Skeleton className="w-32 h-8" />
      </div>
    );
  }

  const handleLogout = async () => {
    if (auth) {
      await auth.signOut();
      redirect('/login');
    }
  };

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <h2 className="text-xl font-semibold">Admin Panel</h2>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === '/admin'}>
                <Link href="/admin">
                  <Settings />
                  <span>Conference Settings</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === '/admin/tickets'}>
                <Link href="/admin/tickets">
                  <Ticket />
                  <span>Registration Fees</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <Button variant="ghost" onClick={handleLogout} className="w-full justify-start gap-2">
            <LogOut />
            <span>Logout</span>
          </Button>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex items-center justify-between p-4 border-b">
          <SidebarTrigger className="md:hidden" />
          <div className="flex-1" />
          <div className="text-sm text-muted-foreground">
            {user.email}
          </div>
        </header>
        <main className="p-4 md:p-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}


export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <FirebaseClientProvider>
            <AdminLayoutContent>{children}</AdminLayoutContent>
        </FirebaseClientProvider>
    )
}
