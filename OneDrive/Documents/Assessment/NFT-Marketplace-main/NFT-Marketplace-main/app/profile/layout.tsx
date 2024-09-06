import MiniFooter from "@/components/layout/MiniFooter";
import MobileBottomTab from "@/components/layout/MobileBottomTab";
import Navbar from "@/components/layout/Navbar";

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full overflow-auto flex flex-col">
      <Navbar />
      <div className="h-full">
        {
          children
        }
      </div>
      <MiniFooter />
      <MobileBottomTab />
    </div>
  )
}