import { ScrollArea } from "@/components/ui/scroll-area";
import TopHeader from "./TopHeader";
import { usePathname } from 'next/navigation';

type Props = {
  children: React.ReactNode;
}

export default function EditLayout({
  children
}: Props) {
  const pathname = usePathname();
  const isCollection = pathname.startsWith('/collection');

  const LeftSidebar = isCollection
    ? require('./LeftSidebar').default
    : require('../../edition/edit/LeftSidebar').default;

  return (
    <div className="h-full overflow-auto lg:bg-light-grey lg:py-3 lg:pl-3 flex">
      <LeftSidebar />
      <div className="flex lg:ml-3 flex-col flex-1 h-full overflow-auto relative">
        <div className="absolute top-0 w-full bg-none z-10">
          <TopHeader />
        </div>
        <div className="overflow-auto pr-1 flex flex-col h-full scroll pt-11">
          {children}
        </div>
      </div>
    </div>
  )
}