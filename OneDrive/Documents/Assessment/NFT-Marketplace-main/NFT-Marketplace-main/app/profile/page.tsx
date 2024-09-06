import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { ArrowClockwise, ShoppingCartSimple, Star, Share, FunnelSimple, Folder, CirclesFour, Rows, MagnifyingGlass, ArrowsDownUp } from "@phosphor-icons/react/dist/ssr";
import { ChevronLeft, ChevronsUpDown, Pencil, RotateCw, Search, Send } from "lucide-react";
import Image from 'next/image';
import Link from "next/link";


export default function ProfilePage() {
  return (
    <div className="h-full flex-col flex">
      <div className="lg:px-8 px-4 py-4 flex gap-3 items-center border-b lg:border-b-0 border-grey">
        <Button className="px-1 h-8 rounded-sm hidden lg:block" variant={'ghost'} >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <div className="flex flex-1 items-center">
          <div className="relative">
            <Image src='/image/user-avatar.png' className="rounded-full w-8 h-8 lg:w-11 lg:h-11" alt='user-avatar' width={45} height={45} />
            <Image src='/image/verified.svg' alt='verified' className="w-[18px] h-[18px] absolute right-[-3px] bottom-[-3px]" width={18} height={18} />
          </div>
          <div className="flex w-full pl-2 lg:hidden">
            <div className="font-semibold">
              Trump Digital Trade
            </div>
            <div className="flex gap-1 ml-auto">
              <Button variant={'ghost'} className="w-[26px] h-[26px] rounded px-0">
                <Star width={20} className="text-dark-grey" />
              </Button>
              <Button variant={'secondary'} className="w-[26px] h-[26px] rounded px-0">
                <Share width={20} className="text-dark-grey" />
              </Button>
              <Button variant={'ghost'} className="w-[26px] h-[26px] rounded px-0">
                <ArrowClockwise width={20} className="text-dark-grey" />
              </Button>
            </div>
          </div>
          <div className="ml-3 hidden lg:block">
            <div className="flex items-center">
              <Image src='/image/aptos-icon.png' alt='aptos-icon' className="w-[18px] h-[18px]" width={18} height={18} />
              <div className="font-semibold ml-1 mr-1.5">
                Evakt8...GXRG
              </div>
              <Star className="w-5 h-5 text-grey" />
            </div>
            <div className="mt-2 flex gap-1.5">
              <Button className="px-2 h-[26px] text-3" variant={'outline'}>
                <Image src='/image/X-icon.svg' alt='X-icon' className="w-[18px] h-[18px] mr-1" width={18} height={18} />
                Add
              </Button>
              <Button className="px-2 h-[26px]" variant={'outline'}>
                <Image src='/image/discord-icon.svg' alt='X-icon' className="w-[18px] h-[18px] mr-1" width={18} height={18} />
                Add
              </Button>
            </div>
          </div>
          <div className="ml-8 hidden lg:block">
            <div className="text-3 text-grey font-medium">
              Portfolio Value
            </div>
            <div className="text-3 mt-2 font-semibold flex">
              1.518 APT
              <div className="text-green-500 font-medium ml-1">
                +2.90%
              </div>
            </div>
          </div>
          <div className="ml-6 hidden lg:block">
            <div className="text-3 text-grey font-medium">
              Total Cost
            </div>
            <div className="text-3 mt-2 font-semibold flex">
              1.231 APT
            </div>
          </div>
          <div className="ml-auto hidden lg:flex">
            <div>
              <div className="text-3 text-right text-grey font-medium">
                Listed / Supply
              </div>
              <div className="text-3  text-right mt-2 font-semibold flex">
                1421/5,554
                <div className="text-grey font-medium ml-1">
                  25.59%
                </div>
              </div>
            </div>
            <div className="ml-6">
              <div className="text-3 text-right text-grey font-medium">
                Owners
              </div>
              <div className="text-3  text-right mt-2 font-semibold flex">
                2.17K
                <div className="text-grey font-medium ml-1">
                  25.59%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-grey px-8 pt-3 pb-1 gap-4 hidden lg:flex">
        <div className="font-medium text-grey rounded-sm hover:bg-light-grey cursor-pointer">Item</div>
        <div className="font-medium text-grey rounded-sm hover:bg-light-grey cursor-pointer">Offers</div>
        <div className="font-medium rounded-sm hover:bg-light-grey cursor-pointer">
          Listed
          <div className="h-1 rounded-full bg-blue" />
        </div>
        <div className="font-medium text-grey rounded-sm hover:bg-light-grey cursor-pointer">Created</div>
        <div className="font-medium text-grey rounded-sm hover:bg-light-grey cursor-pointer">Hidden</div>
      </div>
      <div className="lg:flex px-8 pt-4 hidden">
        <div className="flex flex-1 items-center">
          <Folder className="w-5 h-5 mr-4" />
          <div className="relative md:grow-0 flex items-center">
            <Search className="absolute left-2.5 h-4 w-4 text-grey" />
            <Input
              type="search"
              placeholder="Search Items"
              className="w-full bg-light-grey pl-8 pr-12 md:w-[200px] font-medium lg:w-[336px] h-9 rounded-sm border-none placeholder:text-grey"
            />

          </div>
        </div>
        <div className="flex gap-4 items-center">
          <Button variant={'outline'} className=" h-8 rounded-full px-3">
            Highest Total Value
            <ChevronsUpDown className="w-4 h-4 text-grey ml-1" />
          </Button>
          <RotateCw className="w-6 h-6" />
        </div>
      </div>
      <div className="lg:hidden flex px-4 pt-4 pb-3">
        <div className="flex gap-4 flex-1 text-grey">
          <Button className="px-0 h-6 w-6 rounded p-0.5" variant={"ghost"}>
            <FunnelSimple width={24} height={24} />
          </Button>
          <Button className="px-0 h-6 w-6 rounded p-0.5" variant={"ghost"}>
            <CirclesFour width={24} height={24} />
          </Button>
          <Button className="px-0 h-6 w-6 rounded p-0.5" variant={"ghost"}>
            <Rows width={24} height={24} />
          </Button>
          <Button className="px-0 h-6 w-6 rounded p-0.5" variant={"ghost"}>
            <Folder width={24} height={24} />
          </Button>
        </div>
        <div className="flex gap-4 text-dark-grey">
          <Button className="px-0 h-6 w-6 rounded p-0.5" variant={"ghost"}>
            <MagnifyingGlass width={24} height={24} />
          </Button>
          <Button className="px-0 h-6 w-6 rounded p-0.5" variant={"ghost"}>
            <ArrowsDownUp width={24} height={24} />
          </Button>
        </div>
      </div>
      <div className="h-full lg:pt-3.5 pt-2 grid lg:px-8 px-4 grid-cols-2 md:grid-cols-3 gap-4">
        <div className="lg:w-[216px] w-full">
          <div className="h-[186px] border-light-grey border rounded-t-lg bg-light-grey flex flex-col justify-center items-center text-grey font-medium ">
            No Items
          </div>
          <div className="pt-3 px-2.5 border-x border-b rounded-b-lg pb-5 border-grey">
            <div className="flex items-center">
              <Image src='/image/collection-avatar.png' alt='collection-avatar' className="w-8 h-8 rounded mr-2.5" width={48} height={48} />
              <div className="flex-1">
                <div className="text-3 font-semibold">
                  Monkie Man
                </div>
                <div className="text-3 mt-0.5 ">
                  0 items
                </div>
              </div>
              <Link href={'/collection/edit/details'}>
                <Button variant={'secondary'} className="rounded-full h-8 w-8 px-0 text-grey">
                  <Pencil className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="mt-4 flex gap-1 items-center">
              <Image src='/image/aptos-icon.png' alt='aptos-icon' className="w-[18px] h-[18px]" width={18} height={18} />
              <div className="font-bold">
                - -
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:px-8 px-4 pb-3 pt-2.5 lg:pt-3 flex items-center">
        <div className="flex-1 lg:flex items-center hidden">
          <Image src='/image/clean-icon.svg' alt='clean-icon' width={24} height={24} />
          <Switch className='h-6 ml-1.5' />
        </div>
        <div className="flex gap-4 items-center flex-1 lg:flex-none justify-end">
          <Button className="px-16 h-11 lg:h-10 flex flex-1 md:flex-none">
            List NFT
          </Button>
          <Button variant={'outline'} className="text-dark-grey h-11 lg:h-10  w-11 lg:w-10 px-0 rounded-sm">
            <Send className="w-4 h-4" />
          </Button>
          <Button variant={'outline'} className="text-dark-grey h-11 lg:h-10  w-11 lg:w-10 px-0 rounded-sm">
            <ShoppingCartSimple width={18} className="text-dark-grey" />
          </Button>
        </div>
      </div>
    </div>
  )
}