"use client";

import { useState, ChangeEvent } from "react";
import EditLayout from "@/components/collection/edit/EditLayout";
import MiniFooter from "@/components/layout/MiniFooter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Link, Trash } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { Upload } from "lucide-react";

interface IAvatarFile {
  file: File | null;
  url: string | null;
}

const DetailPage: React.FC = () => {
  const [avatarFile, setAvatarFile] = useState<IAvatarFile>({ file: null, url: null });
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    if (files.length > 0 && uploadedImages.length < 3) {
      setUploadedImages([...uploadedImages, ...files.slice(0, 3 - uploadedImages.length)]);
    }
  };

  const handleImageRemove = (index: number) => {
    const newImages = [...uploadedImages];
    newImages.splice(index, 1);
    setUploadedImages(newImages);
  };

  return (
    <div className="h-full overflow-auto flex flex-col ">
      <EditLayout>
        <div className="rounded-md bg-white lg:px-11 lg:py-6 pt-5 px-4">
          <div className="lg:max-w-[540px] lg:pb-80 pb-8">
            <div className="text-sm font-medium sr-only">
              Edit Collection / Details
            </div>
            <div className="text-2xl mt-3 lg:mt-0 font-semibold">
              Details
            </div>
            <div className="lg:mt-8 mt-6">
              <div className="font-medium">
                Name
              </div>
              <Input
                className="mt-3 rounded-lg placeholder:text-grey"
                placeholder="My Collection name"
              />
            </div>
            <div className="mt-6">
              <div className="font-medium">
                Description
              </div>
              <Textarea
                className="mt-3 rounded-lg placeholder:text-grey"
                placeholder="Add a Description"
                rows={8}
              />
            </div>
            <div className="mt-6">
              <div className="font-medium">
                URL
              </div>
              <div className="mt-2.5 font-medium text-sm text-dark-grey">
                Customise your URL in Wgmi. Must only contain lowercase letters, Number, hyphens
              </div>
              <Input
                className="mt-3 rounded-lg placeholder:text-grey"
                placeholder="My Collection name"
              />
            </div>
            <div className="mt-6">
              <div className="font-medium">
                Category and tags
              </div>
              <div className="mt-2.5 font-medium text-sm text-dark-grey">
                Make your items more discoverable on Wgmi by adding tags and a category.
              </div>
              <Select>
                <SelectTrigger className="rounded-lg placeholder:text-grey text-sm mt-3">
                  <SelectValue className="placeholder:text-grey" placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent className="rounded-lg border-grey font-bold">
                  <SelectItem value="light">Category 1</SelectItem>
                  <SelectItem value="dark">Category 2</SelectItem>
                  <SelectItem value="system">Category 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="mt-6">
              <div className="font-medium">
                Social media
              </div>
              <div className="mt-2.5 font-medium text-sm text-dark-grey">
                Add your social links that will display in your collection
              </div>
              <div className="flex gap-3 mt-3 items-center">
                <Image src='/image/x-real-icon.svg' className="rounded-full w-8 h-8 " alt='x-real-icon' width={32} height={32} />
                <Input className="rounded-lg px-2 disabled:bg-light-grey" disabled placeholder="https://x.com/ajdesignalchemy" />
                <Button className="min-w-[107px] rounded-lg">
                  Linked
                  <Link width={18} height={18} className="ml-1" />
                </Button>
              </div>
              <div className="flex gap-3 mt-3 items-center">
                <Image src='/image/discord-real-icon.svg' className="rounded-full w-8 h-8 " alt='x-real-icon' width={32} height={32} />
                <Input className="rounded-lg px-2 disabled:bg-light-grey" disabled placeholder="Link Profile" />
                <Button className="min-w-[107px] bg-blue hover:bg-blue/85 rounded-lg">
                  Link Profile
                </Button>
              </div>
            </div>
            <div className="mt-6">
              <div className="font-medium">
                Featured Image<span className="text-blue">{" (" + uploadedImages.length + "/4)"}</span>
              </div>
              <div className="mt-2.5 font-medium text-sm text-dark-grey">
                This Image will be used for featuring your collection on the homepage, category pages or display images in wgmi (Max:4)
              </div>
              <div className="rounded-lg border border-grey p-2 flex justify-between items-center mt-4">
                <div className="flex">
                  <div className="w-[64px] h-[64px] relative rounded-sm flex justify-center items-center">
                    <Image src={"/image/collection-theme.png"} alt="" width={66} height={66} />
                  </div>
                  <div className="flex flex-col items-start justify-center mx-2">
                    <div className="text-[16px]">
                      Upload Image * (Default)
                    </div>
                    <div className="font-semibold text-sm text-grey">
                      Size: 400 x 600
                    </div>
                  </div>
                </div>
                <div
                  className="flex items-center justify-center px-0 bg-[#f4f4f4] h-8 w-8 rounded-[3px] ml-2 cursor-pointer"
                  onClick={() => { }}
                >
                  <Trash width={15} height={15} className="text-dark-grey" />
                </div>
              </div>
              {uploadedImages.map((file, index) => (
                <div key={index} className="rounded-lg border border-grey p-2 flex justify-between items-center mt-4">
                  <div className="flex">
                    <div className="w-[64px] h-[64px] relative rounded-sm flex justify-center items-center">
                      <Image src={URL.createObjectURL(file)} alt="" width={66} height={66}/>
                    </div>
                    <div className="flex flex-col items-start justify-center mx-2">
                      <div className="text-[16px]">
                        {file.name}
                      </div>
                      <div className="font-semibold text-sm text-grey">
                        Size: 400 x 600
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex items-center justify-center px-0 bg-[#f4f4f4] h-8 w-8 rounded-[3px] ml-2 cursor-pointer"
                    onClick={() => handleImageRemove(index)}
                  >
                    <Trash width={15} height={15} className="text-dark-grey" />
                  </div>
                </div>
              ))}
              {uploadedImages.length < 3 && (
                <div className="rounded-lg border border-grey p-2 flex justify-between items-center mt-4">
                  <div className="flex">
                    <div className="w-[64px] h-[64px] border-dashed border border-grey relative rounded-sm flex justify-center items-center">
                      <Upload className="w-5 h-5 text-grey" />
                    </div>
                    <div className="flex flex-col items-center justify-center mx-2">
                      <div className="text-[16px]">
                        Upload Image
                      </div>
                      <div className="font-semibold text-sm text-grey">
                        Size: 400 x 600
                      </div>
                    </div>
                  </div>
                  <Button className="min-w-[107px] bg-blue hover:bg-blue/85 rounded-lg" onClick={() => document.getElementById('fileInput')?.click()}>
                    Upload
                  </Button>
                  <input id="fileInput" type="file" accept="image/*" className="hidden" multiple onChange={handleFileUpload} />
                </div>
              )}
            </div>
            <div className="mt-6">
              <div className="font-medium">
                Display theme
              </div>
              <div className="mt-2.5 font-medium text-sm text-dark-grey">
                Change how your items are shown
              </div>
              <div className="flex lg:justify-between justify-center mt-3 gap-4 flex-wrap ">
                <div className="w-[132px]">
                  <div className="h-[132px] border border-grey rounded-lg place-content-center flex-col flex">
                    <Image src={"/image/collection-theme.png"} alt="" width={66} height={66} className="w-[66px] h-[66px] mx-auto" />
                  </div>
                  <div className="mt-4 text-center text-grey">
                    Padded
                  </div>
                </div>
                <div className="w-[132px]">
                  <div className="h-[132px] border border-grey rounded-lg place-content-center flex-col flex">
                    <div className="w-[66px] flex justify-center overflow-clip mx-auto">
                      <Image src={"/image/collection-theme.png"} alt="" width={132} height={132} className="min-w-[132px] h-[132px] mx-auto" />
                    </div>
                  </div>
                  <div className="mt-4 text-center text-grey">
                    Contained
                  </div>
                </div>
                <div className="w-[132px]">
                  <div className="h-[132px] border border-grey rounded-lg place-content-center flex-col flex">
                    <Image src={"/image/collection-theme.png"} alt="" width={132} height={132} className="w-[132px] h-[132px] mx-auto" />
                  </div>
                  <div className="mt-4 text-center text-grey">
                    Covered
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center">
              <div className="flex flex-1 flex-col">
                <div className="font-medium">
                  Explicit & Sensitive content
                </div>
                <div className="mt-2.5 font-medium text-sm text-dark-grey">
                  Set this collection as explicit and sensitive Collection
                </div>
              </div>
              <div>
                <Switch />
              </div>
            </div>
          </div>
        </div>
      </EditLayout>
      <div className="flex justify-end gap-4 px-11 py-3 lg:border-t border-grey">
        <Button variant={'outline'} className="w-48 rounded-lg ">
          Save Draft
        </Button>
        <Button className="bg-blue hover:bg-blue/85 rounded-lg w-48">
          Publish Drop
        </Button>
      </div>
      <MiniFooter />
    </div>
  );
};

export default DetailPage;