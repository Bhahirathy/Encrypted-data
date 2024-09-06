import { ClipboardText, DownloadSimple, UploadSimple } from "@phosphor-icons/react/dist/ssr";
import MediaUpload from "./MediaUpload";
import { Button } from "@/components/ui/button";
import { useState } from 'react';

type Props = {};

export default function UploadSecondSection({ }: Props) {
  const [progress, setProgress] = useState<number>(0); 

  
  const remainingValue = 8190 - progress;
 const progressPercentage = (progress / 8190) * 100;
  return (
    <div>
      <div className="font-medium">Preview & Reveal</div>
      <div className="flex flex-col gap-3 mt-6">
        <div className="rounded-md border-grey border p-4">
          <div className="flex gap-3">
            <UploadSimple width={24} height={24} />
            <div className="font-semibold flex-1">Select Media</div>
          </div>
          <div className="mt-3">
            <div className="rounded bg-light-grey h-3 w-full p-0.5">
              <div 
                className="w-1/4 h-full bg-blue rounded"
                style={{ width: `${progressPercentage}%` }} 
              ></div>
            </div>
            <div className="mt-2 text-dark-grey text-right text-3">
              {remainingValue} Left
            </div>
          </div>
          <div className="rounded-lg border border-grey py-4 flex mt-6">
            <div className="mx-auto flex justify-center items-center flex-col">
              <MediaUpload setProgress={setProgress} />
              <div className="font-semibold mt-5 text-sm">
                Drag & drop or click to select up to 10,000 media files
              </div>
              <div className="text-sm font-medium text-dark-grey mt-2.5">
                max size: 5 GB, Format: JPG, PNG, SVG, and GIF are supported
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <Button variant={'outline'} className="rounded w-full">Delete all</Button>
            <Button disabled={progress === 0} className="rounded w-full disabled:bg-dark">Upload</Button>
          </div>
        </div>
        <div className="rounded-md border-grey border p-4">
          <div className="flex gap-3">
            <ClipboardText width={24} height={24} />
            <div className="font-semibold flex-1">Select metadata <span className="text-dark-grey">(Optional)</span></div>
            <div className="flex gap-3 text-blue">
              <DownloadSimple width={24} height={24} />
              <div className="font-semibold flex-1">Download example</div>
            </div>
          </div>
          <div className="rounded-lg border border-grey py-4 flex mt-6">
            <div className="mx-auto flex justify-center items-center flex-col">
              <MediaUpload setProgress={setProgress} />
              <div className="font-semibold mt-5 text-sm">
                Drag and drop or click to upload a CSV file.
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <Button variant={'outline'} className="rounded w-full">Delete all</Button>
            <Button disabled className="rounded w-full disabled:bg-grey">Upload</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
