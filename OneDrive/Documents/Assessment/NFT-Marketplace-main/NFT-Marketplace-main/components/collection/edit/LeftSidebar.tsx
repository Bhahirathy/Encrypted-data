"use client"
import { Button } from "@/components/ui/button";
import { CaretLeft, FileArrowUp, Palette, PencilSimple } from "@phosphor-icons/react/dist/ssr";
import Image from 'next/image';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

type LeftNav = {
  title: string
  path: string
}

const editNavs: LeftNav[] = [
  { title: 'Details', path: '/collection/edit/details' },
  { title: 'Creators Earnings', path: '/collection/edit/creators-earnings' },
  { title: 'Team members', path: '/collection/edit/team' },
]

const setUpNavs: LeftNav[] = [
  { title: 'Settings', path: '/collection/set-up/settings' },
  { title: 'Pre-reveal', path: '/collection/set-up/pre-reveal' },
  { title: 'Collections Earnings', path: '/collection/set-up/earnings' },
]

const uploadNavs: LeftNav[] = [
  { title: 'Item', path: '/collection/upload/items' }
]

export default function LeftSidebar() {
  const pathname = usePathname()
  return (
    <div className="h-full overflow-auto scroll-hidden flex flex-col">
      <div className="w-[250px] flex-1 rounded-md border border-grey hidden lg:block pb-4">
        <div className=" px-6 pb-4 border-b border-grey">
          <div className="pt-11">
            <Link href={'/'} className="font-semibold flex items-center">
              <CaretLeft width={24} height={24} className="mr-4" />
              Go back
            </Link>
          </div>
          <div className="flex mt-8">
            <div className="relative mr-3">
              <Image src='/image/collection-avatar.png' className="rounded-full w-8 h-8 lg:w-11 lg:h-11" alt='user-avatar' width={45} height={45} />
              <Image src='/image/verified.svg' alt='verified' className="w-[18px] h-[18px] absolute right-0 bottom-0" width={18} height={18} />
            </div>
            <div>
              <div className="font-semibold">
                Monkie Man
              </div>
              <div className="font-medium mt-1.5 text-grey text-3">
                0 items
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="rounded bg-white h-3 w-full p-0.5">
              <div className="w-1/4 h-full bg-blue rounded "></div>
            </div>
            <div className="text-3 text-dark-grey mt-2">
              25%
            </div>
          </div>
        </div>
        <div className="px-6 py-4 border-b border-grey">
          <div className="font-medium text-sm flex gap-1 items-center">
            <PencilSimple width={18} height={18} />
            Edit Collection
          </div>
          <ul className="list-none mt-3">
            {
              editNavs.map(({ title, path }) => (
                <li key={title}>
                  <Link href={path} className={twMerge([
                    "block text-sm rounded-lg p-3 font-medium =",
                    pathname.includes(path) ? "bg-blue text-white" : "text-dark-grey"
                  ])}>
                    {title}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="px-6 py-4 border-b border-grey">
          <div className="font-medium text-sm flex gap-1 items-center">
            <Palette width={18} height={18} />
            Collection Set-up
          </div>
          <ul className="list-none mt-3">
            {
              setUpNavs.map(({ title, path }) => (
                <li key={title}>
                  <Link href={path} className={twMerge([
                    "block text-sm rounded-lg p-3 font-medium =",
                    pathname.includes(path) ? "bg-blue text-white" : "text-dark-grey"
                  ])}>
                    {title}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="px-6 py-4 border-b border-grey">
          <div className="font-medium text-sm flex gap-1 items-center">
            <FileArrowUp width={18} height={18} />
            Upload & Reveal
          </div>
          <ul className="list-none mt-3">
            {
              uploadNavs.map(({ title, path }) => (
                <li key={title}>
                  <Link href={path} className={twMerge([
                    "block text-sm rounded-lg p-3 font-medium =",
                    pathname.includes(path) ? "bg-blue text-white" : "text-dark-grey"
                  ])}>
                    {title}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}