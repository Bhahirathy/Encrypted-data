import EditLayout from "@/components/collection/edit/EditLayout";
import PreRevealAvatarUpload from "@/components/collection/set-up/PreRevealAvatarUpload";
import MiniFooter from "@/components/layout/MiniFooter";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function PreRevealPage() {
  return (
    <div className="flex flex-col h-full overflow-auto">
      <EditLayout>
        <div className="rounded-md bg-white flex-1 lg:px-11 lg:py-6 pt-5 px-4">
          <div className="lg:max-w-[540px] lg:min-w-[540px] h-full pb-8 ">
            <div className="text-sm font-medium lg:sr-only">
              Edit Collection  /  Details
            </div>
            <div className="text-2xl mt-3 lg:mt-0 font-semibold">
              Pre-reveal
            </div>
            <div className="lg:mt-8 mt-6">
              <div className="font-medium text-sm text-dark-grey">
                Each NFT in your collection will show  your Pre-reveal media until you upload and reveal  your final assets.
              </div>
              <div className="lg:mt-8 mt-6 flex flex-col gap-6">
                <div>
                  <div className="font-medium">
                    Display Image
                  </div>
                  <div className="font-medium text-sm text-dark-grey mt-3">
                    Drag and drop or click to upload, Recommended size: 1:1 aspect ratio.
                  </div>
                  <div className="rounded-lg py-4 mt-3 border border-grey flex flex-col items-center justify-center">
                    <PreRevealAvatarUpload />
                    <div className="text-dark-grey mt-5 text-sm font-medium">
                      Size: 1000px x 1000px (1:1)
                    </div>
                  </div>
                </div>
                <div>
                  <div className="font-medium">
                    Display Image
                    <span className="text-dark-grey ml-1">
                      (Optional)
                    </span>
                  </div>
                  <div className="font-medium text-sm text-dark-grey mt-3">
                    This will be shown on your item page
                  </div>
                  <Textarea
                    rows={10}
                    className="mt-3 rounded-lg"
                    placeholder="Add a Description"
                  />
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