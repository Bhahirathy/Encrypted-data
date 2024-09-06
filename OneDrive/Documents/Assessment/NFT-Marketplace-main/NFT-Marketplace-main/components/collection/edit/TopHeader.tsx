import BackButton from "@/components/common/BackButton";
import ProfileButton from "@/components/layout/ProfileButton";
import { Button } from "@/components/ui/button";
import { WalletSelector } from "@/components/walletProvider/WalletSelector";
import { List } from "@phosphor-icons/react/dist/ssr";

export default function TopHeader() {
  return (
    <div className="pb-1">
      <div className="lg:flex gap-4 justify-end pr-3 hidden">
        <WalletSelector />
        <ProfileButton />
      </div>
      <div className="flex items-center pr-6 pl-3 b py-3 shadow-md lg:hidden">
        <div className="flex-1">
          <BackButton />
        </div>

        <Button className="h-6 w-6 px-0 rounded" variant={'ghost'}>
          <List width={24} height={24} />
        </Button>
      </div>
    </div>
  )
}