import { Button } from "@/components/ui/button";
import { ArrowCircleRight, LockSimple, Sparkle, Tray } from "@phosphor-icons/react/dist/ssr";
import Image from 'next/image';
import Link from "next/link";

type Props = {}

export default function UploadFirstSection({ }: Props) {
  return (
    <div>
      <div className="p-2 rounded-lg bg-light-grey flex items-center">
        <Image src={'/image/user-avatar.png'} className="rounded" alt="" width={56} height={56} />
        <div className="ml-2 flex-1">
          <div className="text-[18px] font-medium">Uploaded to opensea</div>
          <div className="mt-2.5 text-dark-grey text-sm">1 items</div>
        </div>
        <Button className="text-blue" variant={'ghost'}>
          Edit
        </Button>
      </div>
      <div className="mt-8">
        <div className="font-medium">
          Preview & Reveal
        </div>
        <div className="mt-6 flex gap-3">
          <Link href={'?p=preview'} className="w-full rounded-md border border-grey hover:bg-light-grey cursor-pointer group p-4 flex flex-col">
            <div className="flex gap-3">
              <Tray width={24} height={24} />
              <div className="font-semibold">Preview</div>
            </div>
            <div className="mt-3 text-dark-grey text-sm font-medium h-full">
              View and edit your items.
            </div>
            <div className="mt-1 flex justify-end">
              <ArrowCircleRight width={24} height={24} className="text-grey group-hover:-rotate-45 transition-all duration-500 group-hover:text-blue" />
            </div>
          </Link>
          <Link href={'?p=reveal'}  className="w-full rounded-md border border-grey hover:bg-light-grey cursor-pointer group p-4">
            <div className="flex gap-3">
              <Sparkle width={24} height={24} />
              <div className="font-semibold flex-1">Reveal</div>
              <LockSimple width={24} height={24} />
            </div>
            <div className="mt-3 text-dark-grey text-sm font-medium">
              Upload your items to a decentralized server and reveal them to everyone.
            </div>
            <div className="mt-1 flex justify-end">
              <ArrowCircleRight width={24} height={24} className="text-grey group-hover:-rotate-45 transition-all duration-500 group-hover:text-blue" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}