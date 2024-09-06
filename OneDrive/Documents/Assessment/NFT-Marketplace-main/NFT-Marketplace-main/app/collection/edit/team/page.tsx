import AddTeammember from "@/components/collection/edit/AddTeamMember";
import EditLayout from "@/components/collection/edit/EditLayout";
import MiniFooter from "@/components/layout/MiniFooter";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { DiscordLogo, DotsThreeOutlineVertical, PencilSimple, Trash, XLogo } from "@phosphor-icons/react/dist/ssr";
import Image from 'next/image';


export default function TeamPage() {
  return (
    <div className="flex flex-col h-full overflow-auto">
      <EditLayout>
        <div className="rounded-md bg-white flex-1 lg:px-11 lg:py-6 pt-5 px-4">
          <div className="lg:max-w-[540px] lg:min-w-[540px] h-full pb-8 ">
            <div className="text-sm font-medium lg:sr-only">
              Edit Collection  /  Details
            </div>
            <div className="text-2xl mt-3 lg:mt-0 font-semibold">
              Team
            </div>
            <div className="lg:mt-8 mt-6">
              <div className="font-medium text-sm text-dark-grey">
                Each NFT in your collection will show  your Pre-reveal media until you upload and reveal  your final assets.
              </div>
              <div className="lg:mt-8 mt-6 flex flex-col gap-6">
                <div>
                  <div className="font-medium">
                    Existing members
                  </div>
                  <div className="font-medium text-sm text-dark-grey mt-3">
                    Change how your items are shown
                  </div>
                  <div className="flex flex-col mt-3 gap-4">
                    <div className="flex items-center">
                      <Image src={'/image/team-member-1.png'} alt="" width={64} height={64} className="w-16 h-16 rounded-lg" />
                      <div className="ml-3 flex-1">
                        <div className="text-sm font-medium">DAX</div>
                        <div className="mt-1.5 text-blue text-sm font-medium">CTD</div>
                      </div>
                      <div className="flex gap-2.5">
                        <Button variant={'secondary'} className="rounded-[2px] h-8 w-8 px-0 text-grey">
                          <XLogo width={18} height={18} className="w-[18px] h-[18px]" />
                        </Button>
                        <Button variant={'secondary'} className="rounded-[2px] h-8 w-8 px-0 text-grey">
                          <DiscordLogo weight="fill" width={18} height={18} className="w-[18px] h-[18px]" />
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant={'ghost'} className="rounded-[2px] h-8 w-8 px-0 text-grey">
                              <DotsThreeOutlineVertical weight="fill" width={18} height={18} className="w-[18px] h-[18px]" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="rounded-lg border-light-grey" align="end">
                            <DropdownMenuItem>
                              <PencilSimple className="mr-2.5" />
                              Edit info
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <Trash className="mr-2.5" />
                              Delete Member
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>

                      </div>
                    </div>
                    <div className="flex items-center">
                      <Image src={'/image/team-member-2.png'} alt="" width={64} height={64} className="w-16 h-16 rounded-lg" />
                      <div className="ml-3 flex-1">
                        <div className="text-sm font-medium">Alister Steve</div>
                        <div className="mt-1.5 text-blue text-sm font-medium">HEAD OF DESIGNS</div>
                      </div>
                      <div className="flex gap-2.5">
                        <Button variant={'secondary'} className="rounded-[2px] h-8 w-8 px-0 text-grey">
                          <XLogo width={18} height={18} className="w-[18px] h-[18px]" />
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant={'ghost'} className="rounded-[2px] h-8 w-8 px-0 text-grey">
                              <DotsThreeOutlineVertical weight="fill" width={18} height={18} className="w-[18px] h-[18px]" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="rounded-lg border-light-grey" align="end">
                            <DropdownMenuItem>
                              <PencilSimple className="mr-2.5" />
                              Edit info
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <Trash className="mr-2.5" />
                              Delete Member
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                    <AddTeammember />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </EditLayout>
      <div className="flex justify-end gap-4 px-11 py-3 lg:border-t  border-grey">
        <Button variant={'outline'} className="w-48 rounded-lg ">
          Save Draft
        </Button>
        <Button className="bg-blue hover:bg-blue/85 rounded-lg w-48">
          Publish Drop
        </Button>
      </div>
      <MiniFooter />
    </div>

  )
}