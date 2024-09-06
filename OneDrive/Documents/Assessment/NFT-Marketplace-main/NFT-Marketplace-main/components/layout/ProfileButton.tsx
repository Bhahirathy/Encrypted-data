
import { Button } from "@/components/ui/button";
import { User } from "@phosphor-icons/react/dist/ssr";

export default function ProfileButton() {
  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-sm"
    >
      <User width={16} height={16} className="text-dark-grey" />
    </Button>
  )
}