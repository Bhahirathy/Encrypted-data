"use client";
import UploadAvatar from "@/components/studio/UploadAvatar"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { DiscordLogo, Plus, PlusCircle, XLogo } from "@phosphor-icons/react/dist/ssr"
import { useState } from "react";

export default function AddTeammember() {
  const [avatarFile, setAvatarFile] = useState<{ file: File | null; url: string | null }>({ file: null, url: "" });
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'outline'} className="flex justify-start h-[50px] rounded-lg" >
          <PlusCircle width={20} height={20} weight="fill" className="mr-2.5" />
          Add members
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[436px] rounded-2xl p-0">
        <DialogHeader className="border-b border-grey px-5 py-4">
          <DialogTitle>Add Member</DialogTitle>
        </DialogHeader>
        <div className="px-6 pb-7 pt-2 flex flex-col gap-6">
          <div>
            <div className="font-medium">
              Display Image
            </div>

            <UploadAvatar avatarFile={avatarFile} setAvatarFile={setAvatarFile} />

          </div>
          <div>
            <div className="font-medium">
              Name
            </div>
            <Input
              className="mt-3 rounded-lg h-11 placeholder:text-dark-grey"
              placeholder="Example: Allan"
            />
          </div>
          <div>
            <div className="font-medium">
              Role
            </div>
            <Input
              className="mt-3 rounded-lg h-11 placeholder:text-dark-grey"
              placeholder="Example: UX designer"
            />
          </div>
          <div>
            <div className="font-medium">
              Socials
            </div>
            <div className="flex gap-2.5 mt-3">
              <Button variant={'secondary'} className="rounded-lg h-8 w-8 px-0 text-grey">
                <XLogo width={18} height={18} className="w-[18px] h-[18px]" />
              </Button>
              <Button variant={'secondary'} className="rounded-lg h-8 w-8 px-0 text-grey">
                <DiscordLogo weight="fill" width={18} height={18} className="w-[18px] h-[18px]" />
              </Button>
              <Button className="rounded-lg h-8 w-8 px-0 text-grey">
                <Plus width={18} height={18} className="w-[18px] h-[18px]" />
              </Button>
            </div>
          </div>
          <Button className="bg-blue hover:bg-blue/85 rounded-lg font-medium w-[197px] mx-auto mt-4">
            Confirm
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}