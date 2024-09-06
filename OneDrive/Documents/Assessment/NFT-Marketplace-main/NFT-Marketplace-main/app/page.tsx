import { NavLogo } from "@/components/common/Logo";
import Navbar from "@/components/layout/Navbar";
import { HardDrive, ImageIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full overflow-auto flex flex-col">
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <div className="h-full flex">
        <div className="hidden lg:block w-full h-full bg-[url('/image/workshop.png')] bg-no-repeat bg-cover bg-center" />
        <div className="w-full h-full lg:place-content-center pt-16 lg:pt-0 lg:pl-14 lg:pr-0 px-4">
          <div className="lg:flex items-center">
            <div className="hidden lg:block">
              <NavLogo />
            </div>
            <div className="lg:hidden mb-4 w-[55px] h-[55px] bg-black rounded-full place-content-center mx-auto">
              <Image
                className="mx-auto w-9 h-3"
                src={'/image/logo.png'}
                alt="wgmi logo"
                width={36}
                height={12}
              />
            </div>
            <div className="lg:text-[32px] text-2xl text-center lg:text-left font-bold ml-4">
              <span className="sr-only lg:not-sr-only">
                Studio
              </span>
              <span className="lg:sr-only">
                Workshop
              </span>
            </div>
          </div>
          <div className="text-dark-grey text-center lg:text-left font-medium mt-2">
            Choose one to create in Studio
          </div>
          <div className="w-full lg:w-[396px] mt-11 lg:mt-8">
            <Link
              href={'/launchpad/studio/drop'}
              className="border block rounded-md p-4 hover:border-white hover:shadow-[0_0_10px_rgba(0,0,0,0.2)]"
            >
              <div className="flex items-center">
                <HardDrive className="w-5 h-5 mr-3" />
                <div className="text-[18px] font-semibold">Collection</div>
              </div>
              <div className="text-dark-grey font-medium mt-2 leading-[17px] text-sm">
                A drop is the release of new project. This usually happens on specified Date & Time
              </div>
            </Link>
            <Link
              href={'/launchpad/studio/edition'}
              className="border-grey border block rounded-md p-4 hover:border-blue mt-6"
            >
              <div className="flex items-center">
                <ImageIcon className="w-5 h-5 mr-3" />
                <div className="text-[18px] font-semibold">Edition</div>
              </div>
              <div className="text-dark-grey font-medium mt-2 leading-[17px] text-sm">
                Create new NFT collection or add an NFT to an existing one. Your items will display immediately
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}