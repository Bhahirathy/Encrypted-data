import { NavLogo } from "@/components/common/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { WalletSelector as ShadcnWalletSelector } from "@/components/walletProvider/WalletSelector";
import { List, MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { Command, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ProfileButton from "./ProfileButton";


export default function Navbar() {
  function capitalizeFirstLetter(str: String) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  return (
    <div className="items-center lg:py-2 py-3 lg:border-b border-grey lg:px-11 px-4 flex shadow-lg lg:shadow-none">
      <Link href={`/`}><NavLogo /></Link>
      <div className="lg:flex items-center flex-1 hidden">
        <ul className="list-none flex gap-6 ml-8 items-center">
          {["marketplace", "discover", "launchpad"].map((item) => (
            <li key={item} className="text-gray-400 font-medium hover:text-black hover:font-semibold">
              <Link href={`/${item}`} className="focus:text-black focus:font-semibold">
                {capitalizeFirstLetter(item)}
              </Link>
            </li>
          ))}
          <li>
            <Link href={'#gold'}>
              <Image
                src={'/image/gold.png'}
                alt="gold"
                width={87}
                height={35}
                className="opacity-80 hover:opacity-100"
              />
            </Link>
          </li>
        </ul>
        <div className="ml-auto flex">
          <div className="relative flex-1 md:grow-0 mr-8 flex items-center">
            <Search className="absolute left-2.5 h-4 w-4 text-grey" />
            <Input
              type="search"
              placeholder="Search here"
              className="w-full bg-light-grey pl-8 pr-12 md:w-[200px] font-medium lg:w-[336px] border-none placeholder:text-grey"
            />
            <div className="text-grey flex absolute right-2.5 items-center">
              <Command className="h-5 w-5 text-grey mr-0.5" />
              K
            </div>
          </div>
          <div className="flex gap-4">
            <ShadcnWalletSelector />
            <ProfileButton />
          </div>
        </div>
      </div>
      <div className="ml-auto flex gap-6 lg:hidden">
        <Button className="h-6 w-6 px-0 rounded" variant={'ghost'}>
          <MagnifyingGlass width={24} height={24} />
        </Button>
        <Button className="h-6 w-6 px-0 rounded" variant={'ghost'}>
          <List width={24} height={24} />
        </Button>
      </div>
    </div>
  );
}