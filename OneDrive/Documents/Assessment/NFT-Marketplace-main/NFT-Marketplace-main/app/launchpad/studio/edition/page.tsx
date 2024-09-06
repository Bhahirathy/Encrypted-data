"use client";

import AddPresaleModal from "@/components/collection/set-up/AddPresaleModal";
import BackButton from "@/components/common/BackButton";
import MediaUpload from "@/components/studio/MediaUpload";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { WalletSelector } from "@/components/walletProvider/WalletSelector";
import { Eye, Image as ImageIcon, PlusCircle, Star, Trash, Info } from "@phosphor-icons/react/dist/ssr";
import { UserRound } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function StudioDropPage() {
  const [file, setFile] = useState<File | null>(null);

  const getPreviewUrl = (file: File) => {
    return URL.createObjectURL(file);
  };

  const renderMediaPreview = (file: File) => {
    if (file.type.startsWith("image/")) {
      return <img src={getPreviewUrl(file)} alt="NFT preview" className="object-cover w-full h-full rounded-t-sm" />;
    } else if (file.type.startsWith("video/")) {
      return <video src={getPreviewUrl(file)} controls className="object-cover w-full h-full rounded-t-sm" />;
    }
    return null;
  };

  return (
    <div className="h-full overflow-auto flex flex-col">
      <div className="flex items-center lg:px-6 px-3 lg:pt-6 py-2">
        <BackButton />
        <div className="flex gap-4 ml-auto">
          <WalletSelector />
          <Button variant="outline" size="icon" className="rounded-sm">
            <UserRound className="h-4 w-4 text-dark-grey" />
          </Button>
        </div>
      </div>
      <div className="lg:px-0 lg:flex h-full overflow-auto gap-8 px-4 justify-center">
        <div className="w-full h-full px-2 overflow-auto max-w-[540px] lg:pt-[116px] pt-14 scroll-hidden">
          <div className="pb-4">
            <div className="font-semibold text-2xl lg:text-center">
              Lets Create your <span className="text-blue">NFT</span>
            </div>
            <div className="text-sm text-dark-grey mt-2 lg:text-center">
              Once your item is minted you will not be able to change any of its information. So double check the info before minting
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-6 lg:pb-[320px] pb-8">
            <div>
              <div className="font-medium">Select Collection *</div>
              <div className="mt-3">
                <Select>
                  <SelectTrigger className="rounded-lg placeholder:text-grey text-left text-sm mt-3 h-11">
                    <SelectValue className="placeholder:text-grey" placeholder="Select Collection" />
                  </SelectTrigger>
                  <SelectContent className="rounded-lg border-grey">
                    <SelectItem value="light">
                      <div className="flex items-center h-[54px]">
                        <Image width={32} height={32} className="w-8 h-8 rounded" alt="Collection avatar" src={'/image/collection-avatar.png'} />
                        <div className="ml-2.5 font-medium text-sm">
                          <div>
                            Monkie man
                          </div>
                          <div className="text-dark-grey">
                            APT
                          </div>
                        </div>
                      </div>
                    </SelectItem>
                    <Button variant={'ghost'} className="flex flex-1 w-full pl-8 rounded justify-start items-center h-[54px]">
                      <PlusCircle width={20} height={20} weight="fill" />
                      <div className="ml-2.5 font-medium text-sm">
                        <div className="text-dark-grey">
                          Create Collection
                        </div>
                      </div>
                    </Button>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <div className="font-medium">Name *</div>
              <div className="mt-3">
                <Input className="text-dark-grey h-11 rounded-lg placeholder:text-grey" placeholder="Name your NFT" />
              </div>
            </div>
            <div>
              <div className="font-medium">Supply *</div>
              <div className="mt-3">
                <Input className="text-dark-grey h-11 rounded-lg placeholder:text-grey" placeholder="1" />
              </div>
            </div>
            <div className="p-8 rounded-lg border border-grey">
              <div className="mx-auto flex flex-col items-center justify-center">
                <MediaUpload setFile={setFile} file={file} />
                <div className="font-medium mt-5">
                  {file
                    ? <div className="flex justify-between"> {file?.name}
                      <div className="flex items-center justify-center px-0 bg-[#f4f4f4] h-6 w-6 rounded-[3px] ml-2" onClick={() => setFile(null)}>
                        <Trash width={15} height={15} className="text-dark-grey" />
                      </div></div>
                    : "Drag & drop media"}
                </div>
                <div className="text-sm text-dark-grey text-center">
                  {file ? `Size: ${(file.size / 1000000).toFixed(2)}MB` : <>Max size: 50MB <br />
                    JPG, PNG, GIF, SVG, MP4</>}
                </div>
              </div>
            </div>
            <div>
              <div className="font-medium">Description</div>
              <div className="mt-3">
                <Textarea
                  rows={7}
                  className="text-dark-grey rounded-lg placeholder:text-grey"
                  placeholder="Add a Description" />
              </div>
            </div>

            <div>
              <div className="font-medium">External Link</div>
              <div className="mt-3">
                <Input className="text-dark-grey h-11 rounded-lg placeholder:text-grey" placeholder="Enter Link here" />
              </div>
            </div>
            <div>
              <div className="font-medium">Attributes</div>
              <div className="mt-3">
                <AddPresaleModal />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex gap-4 h-[436px] lg:pt-[116px] pt-14 hidden">
          <div className="w-[436px] h-[436px] rounded-lg flex items-center justify-center bg-light-grey border border-grey overflow-hidden">
            {file ? renderMediaPreview(file) : (
              <div>
                <ImageIcon width={32} height={32} className="text-grey mx-auto" />
                <div className="font-semibold text-center mt-5">
                  NFT Preview
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col h-[436px] w-[257px]">
            <div className="font-medium">Live Preview</div>
            <div className="mt-3 bg-light-grey rounded-lg flex flex-col h-full p-4">
              <div className="h-[220px] flex flex-col place-content-center rounded-t-lg border border-grey overflow-hidden">
                {file ? renderMediaPreview(file) : (
                  <div>
                    <ImageIcon width={32} height={32} className="text-grey mx-auto" />
                    <div className="font-semibold text-grey text-center mt-5 text-sm">
                      Card Preview
                    </div>
                  </div>
                )}
              </div>
              <div className="border-b border-x border-grey rounded-b-lg bg-white p-2">
                <div className="flex justify-between">
                  <span className="text-[15px]">Digiboy#258</span>
                  <Star width={20} className="text-dark-grey" />
                </div>
                <div className="flex items-center mt-1">
                  <Image src='/image/aptos-icon.png' alt='aptos-icon' width={16} height={16} />
                  <span className="text-[16px] text-black font-bold px-1">1.872</span>
                  <Image src='/image/coin.png' alt='aptos-icon' width={16} height={16} /></div>
                <div className="flex justify-between mt-2">
                  <span className="text-[13px] text-dark-grey">Last Sale: 0.70 APT</span>
                  <Info width={20} className="text-dark-grey" />
                </div>
              </div>
              <div className="flex mt-3 bg-white rounded-sm items-center justify-between p-1">
                <div className="flex items-center">
                <div className="h-[36px] w-[36px] rounded-[3px] overflow-hidden">
                  {file ? renderMediaPreview(file) : (
                    <ImageIcon width={36} height={36} className="text-grey mx-auto" />
                  )}
                </div>
                <div className="mx-2">
                  <div className="text-[14px]">Digiboy</div>
                  <div className="text-[12px] text-dark-grey">#258</div>
                </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center">
                    <Image src='/image/aptos-icon.png' alt='aptos-icon' width={14} height={14} />
                    <span className="text-[14px] text-black font-bold px-1">1.872</span>
                  </div>
                  <div className="text-[12px] text-dark-grey">$23.02</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:py-2 lg:px-4 px-6 pt-2.5 pb-8 lg:border-t border-grey flex gap-3">
        <Button className="bg-blue h-11 hover:bg-blue/85 rounded-lg flex-1 lg:flex-none ml-auto">
          Create
        </Button>
        <Button className="px-0 w-11 lg:hidden h-11 rounded-lg" variant={'outline'}>
          <Eye width={20} height={20} className="text-dark-grey" />
        </Button>
      </div>
    </div>
  );
}