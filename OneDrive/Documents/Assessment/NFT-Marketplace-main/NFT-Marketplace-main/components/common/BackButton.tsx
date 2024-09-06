import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CaretLeft } from "@phosphor-icons/react/dist/ssr";

export default function BackButton() {
  return (
    <Link href={'/'} className="font-semibold lg:text-base text-sm items-center flex" >
      <CaretLeft width={16} height={16} className="lg:mr-4 mr-2" />
      Go back
    </Link>
  )
}