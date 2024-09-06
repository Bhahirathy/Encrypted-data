"use client";

import BackButton from "@/components/ui/back-button";
import UploadAvatar from "@/components/studio/UploadAvatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { WalletSelector } from "@/components/walletProvider/WalletSelector";
import { CaretDown, CaretUp, Eye, EyeSlash, PencilCircle, Sparkle } from "@phosphor-icons/react/dist/ssr";
import { Check, UserRound } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { SetStateAction, useState } from "react";

export default function StudioDropPage() {
  const [avatarFile, setAvatarFile] = useState<{ file: File | null; url: string | null }>({ file: null, url: "" });
  const [isDropdownOneOpen, setIsDropdownOneOpen] = useState(false);
  const [isDropdownTwoOpen, setIsDropdownTwoOpen] = useState(false);
  const [dropdownOneValue, setDropdownOneValue] = useState('After you deploy your Contract');
  const [dropdownTwoValue, setDropdownTwoValue] = useState('After Community');

  const handleDropdownOneOpen = () => {
    setIsDropdownOneOpen(!isDropdownOneOpen);
    setIsDropdownTwoOpen(false); // Close second dropdown when the first is open
  };

  const handleDropdownTwoOpen = () => {
    setIsDropdownTwoOpen(!isDropdownTwoOpen);
    setIsDropdownOneOpen(false); // Close first dropdown when the second is open
  };

  const handleDropdownOneSelect = (value: SetStateAction<string>) => {
    setDropdownOneValue(value);
    setIsDropdownOneOpen(false);
  };

  const handleDropdownTwoSelect = (value: SetStateAction<string>) => {
    setDropdownTwoValue(value);
    setIsDropdownTwoOpen(false);
  };

  return (
    <div className="h-full overflow-auto flex flex-col">
      <div className="flex items-center lg:px-6 px-3 lg:pt-6 py-2">
        <BackButton />
        <div className="flex gap-4 ml-auto">
          <WalletSelector />
          <Button
            variant="outline"
            size="icon"
            className="rounded-sm"
          >
            <UserRound className="h-4 w-4 text-dark-grey" />
          </Button>
        </div>
      </div>
      <div className="lg:pt-[116px] pt-14 lg:px-0 lg:flex h-full overflow-auto gap-[72px] px-4">
        <div className="w-full justify-end flex">
          <div className="w-[472px]">
            <div className="lg:text-5 text-lg font-medium">Let&apos;s create a</div>
            <div className="lg:text-3xl text-[28px] font-bold text-blue">smart Contract</div>
            <div className="lg:text-5 text-lg font-medium text-dark-grey">for your Collections.</div>
            <div className="text-sm mt-6 font-medium text-dark-grey">
              You&apos;ll need to deploy an Aptos Digital Standard Contract on the blockchain before you can create a collection.
            </div>
            <div className="mt-8 flex flex-col gap-4 relative">
              {/* Dropdown One */}
              <DropdownMenu open={isDropdownOneOpen} onOpenChange={handleDropdownOneOpen}>
                <DropdownMenuTrigger className={`text-sm font-medium h-11 px-2 shadow-sm w-full rounded-lg text-left border border-light-grey flex items-center focus-visible:outline-none`}>
                  {dropdownOneValue}
                  {isDropdownOneOpen ? <CaretUp width={20} height={20} className="ml-auto" /> : <CaretDown width={20} height={20} className="ml-auto" />}
                </DropdownMenuTrigger>
                <DropdownMenuContent  className="absolute z-50 rounded-lg border-light-grey shadow-sm w-[472px] mt-1 ml-[-15.3vw]">
                  <DropdownMenuItem onClick={() => handleDropdownOneSelect('Manage collection Settings')}>
                    <EyeSlash width={18} height={18} />
                    <div className="ml-2.5 font-medium text-sm" >
                      <div>
                        Manage collection Settings
                      </div>
                      <div className="text-dark-grey">
                        Edit collection details, earnings, and links.
                      </div>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleDropdownOneSelect('Set up your drop')}>
                    <Sparkle width={18} height={18} />
                    <div className="ml-2.5 font-medium text-sm">
                      <div>
                        Set up your drop
                      </div>
                      <div className="text-dark-grey">
                        Set up your mint schedule and presale stages.
                      </div>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleDropdownOneSelect('Prepare designs')}>
                    <PencilCircle width={18} height={18} />
                    <div className="ml-2.5 font-medium text-sm">
                      <div>
                        Prepare designs
                      </div>
                      <div className="text-dark-grey">
                        Customize your pages and upload all assets.
                      </div>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Dropdown Two */}
              <DropdownMenu open={isDropdownTwoOpen} onOpenChange={handleDropdownTwoOpen}>
                <DropdownMenuTrigger className={`text-sm font-medium h-11 px-2 shadow-sm w-full rounded-lg text-left border border-light-grey flex items-center focus-visible:outline-none`} style={{ marginTop: isDropdownOneOpen ? "165px" : "0px" }}>
                  {dropdownTwoValue}
                  {isDropdownTwoOpen ? <CaretUp width={20} height={20} className="ml-auto" /> : <CaretDown width={20} height={20} className="ml-auto" />}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="absolute z-50 rounded-lg border-light-grey shadow-sm w-[472px] mt-1 ml-[-15.3vw]">
                  <DropdownMenuItem onClick={() => handleDropdownTwoSelect('Can’t View')}>
                    <EyeSlash width={18} height={18} />
                    <div className="ml-2.5 font-medium text-sm">
                      <div>
                        Can’t View
                      </div>
                      <div className="text-dark-grey">
                        Your drop page or items until you publish them.
                      </div>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleDropdownTwoSelect('Set up your drop')}>
                    <Eye width={18} height={18} />
                    <div className="ml-2.5 font-medium text-sm">
                      <div>
                        Set up your drop
                      </div>
                      <div className="text-dark-grey">
                        That you’ve deployed a contract onto the blockchain.
                      </div>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

            </div>
          </div>
        </div>
        <div className="w-full bg-blue-200 mt-8 lg:mt-0 pb-[150px] lg:pb-0">
          <div className="max-w-[600px]">
            <div className="text-lg font-semibold">
              Logo image
            </div>
            <div className="text-sm mt-1 font-medium text-dark-grey">
              Size: 350 x 350. File types: JPG, PNG, SVG, or GIF
            </div>
            <UploadAvatar avatarFile={avatarFile} setAvatarFile={setAvatarFile} />
            <div className="flex flex-col">
              <div className="mt-11 flex flex-col lg:flex-row gap-5">
                <div className="w-full">
                  <div className="text-lg font-semibold">
                    Contract name
                  </div>
                  <Input
                    placeholder="My Collection name"
                    className="bg-secondary border-none rounded-[8px] mt-3 placeholder:text-grey"
                  />
                </div>
                <div className="w-72">
                  <div className="text-lg font-semibold">
                    Token Symbol
                  </div>
                  <Input
                    placeholder="MCN"
                    className="bg-secondary border-none rounded-[8px] mt-3 placeholder:text-grey"
                  />
                </div>
              </div>
              <div className="fixed lg:static w-full right-0 px-6 pb-8 pt-2.5 lg:p-0 bg-white lg:bg-opacity-0 bottom-0">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-blue hover:bg-blue/85 w-full lg:w-auto ml-auto lg:mt-[52px] mt-2.5 rounded-[8px] px-8" disabled={avatarFile?.file === null}>
                      Deploy Contract
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="p-0">
                    <DialogHeader className="border-b border-grey px-5 py-4">
                      <DialogTitle className="text-lg font-semibold">
                        Deploying your Contract
                      </DialogTitle>
                    </DialogHeader>
                    <div className="pt-8 px-8 mb-20">
                      <div className="flex items-center">
                        <div className="w-8 mr-3 flex flex-col">
                          <div className="w-8 h-8 rounded-full border border-green-500 bg-green-500 flex flex-col items-center justify-center">
                            <Check className="w-5 h-5 text-white" />
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold">
                            Go to your wallet to finish Deploying your contract
                          </div>
                          <div className="font-semibold mt-1.5 text-dark-grey text-sm">
                            You&apos;ll be asked to pay gas fees and sign in order to deploy your contract in blockchain.
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center mt-8">
                        <div className="w-8 mr-3">
                          <div className="w-8 h-8 rounded-full border border-grey"></div>
                        </div>
                        <div>
                          <div className="font-semibold">
                            Deploying your Contract
                          </div>
                          <div className="font-semibold mt-1.5 text-dark-grey text-sm">
                            It may take some time for the transaction to be processed.
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex py-2 px-4 border-t border-grey">
        <Button className="bg-blue hover:bg-blue/85 ml-auto rounded-[8px] px-8">
          Create Contract
        </Button>
      </div>
    </div>
  );
}
  