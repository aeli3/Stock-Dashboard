import ChartIcon from "@/app/icons/ChartIcon"
import CommunityIcon from "@/app/icons/CommunityIcon"
import DashboardIcon from "@/app/icons/DashboardIcon"
import GearIcon from "@/app/icons/GearIcon"
import HomeIcon from "@/app/icons/HomeIcon"
import NewsIcon from "@/app/icons/NewsIcon"
import PhoneIcon from "@/app/icons/PhoneIcon"
import ThunderIcon from "@/app/icons/ThunderIcon"
import WalletIcon from "@/app/icons/WalletIcon"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
  } from "@/components/ui/sidebar"
  
  export function AppSidebar() {
    const buttons = {
        "Home": HomeIcon, 
        "Dasboard": DashboardIcon,
        "Wallet": WalletIcon,
        "News": NewsIcon,
        "Stock & Fund": ChartIcon,
    }

    const footerButtons = {
        "Community": CommunityIcon,
        "Settings": GearIcon,
        "Contact Us": PhoneIcon,
    }

    return (
      <Sidebar>
        <SidebarHeader title="Stock Dashboard" />
        <SidebarContent>
            <SidebarGroup className="flex flex-row justify-center items-center">
                <ThunderIcon 
                className="w-8"
                />
                <SidebarGroupLabel className="text-xl font-manrope font-[600] text-black">
                    StockBoard
                </SidebarGroupLabel>
            </SidebarGroup>
            <SidebarMenu>
                {
                    Object.entries(buttons).map(([btn_text, Icon]) => (
                        <SidebarGroup key={btn_text} className="flex flex-row items-center px-4">
                            <div className="w-7 h-7 flex items-center justify-center">
                                <Icon className="w-full h-full"/>
                            </div>
                            <SidebarMenuButton key={btn_text} asChild className="cursor-pointer">
                                <span className="text-sm">{btn_text}</span>
                            </SidebarMenuButton>
                        </SidebarGroup>
                    ))
                }
            </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
            <SidebarMenu>
                {
                    Object.entries(footerButtons).map(([btn_text, Icon]) => (
                        <SidebarGroup key={btn_text} className="flex flex-row items-center px-4">
                            <div className="w-7 h-7 flex items-center justify-center">
                                <Icon className="w-full h-full"/>
                            </div>
                            <SidebarMenuButton key={btn_text + "footer"} asChild className="cursor-pointer">
                                <span className="text-sm">{btn_text}</span>
                            </SidebarMenuButton>
                        </SidebarGroup>
                    ))
                }
            </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    )
  }
  