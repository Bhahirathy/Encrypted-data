import EditLayout from "@/components/collection/edit/EditLayout";
import AddPresaleModal from "@/components/collection/set-up/AddPresaleModal";
import DatePicker from "@/components/collection/set-up/DatePicker";
import MiniFooter from "@/components/layout/MiniFooter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image'

export default function EarningsPage() {
  return (
    <div className="flex flex-col h-full overflow-auto">
      <EditLayout>
        <div className="rounded-md bg-white flex-1 lg:px-11 lg:py-6 pt-5 px-4">
          <div className="lg:max-w-[540px] lg:min-w-[540px] h-full lg:pb-80 pb-8 ">
            <div className="text-sm font-medium lg:sr-only">
              Earnings
            </div>
            <div className="text-2xl mt-3 lg:mt-0 font-semibold">
              Drop Setting
            </div>
            <div className="lg:mt-8 mt-6">
              <div className="flex flex-col gap-6">
                <div>
                  <div className="font-medium">
                    Drop earnings addresses
                  </div>
                  <div className="font-medium text-sm text-dark-grey mt-3">
                    Add a wallet to receive earnings from your primary sale. You can add multiple wallets by using a splitter contract. OpenSea takes a 10% fee on primary sales.
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-4">
                    <Input
                      className="text-dark-grey rounded-lg h-11"
                      defaultValue={"Oxbd2119710a04f5b26fb8195184c0044f96854b1b"}
                    />
                    <div className="flex">
                      <Input
                        className="text-dark-grey text-end rounded-l-[8px] rounded-r-[0px] w-14 h-11 border border-grey"
                        defaultValue={"90"}
                      />
                      <div className="flex place-content-center items-center bg-light-grey w-[60px] rounded-r-lg text-sm text-dark-grey border border-grey">
                        %
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-full bg-light-grey rounded-lg text-sm text-dark-grey border border-[#E2E8F0] flex items-center p-1 justify-start">
                      {/* <Input
                        className="text-dark-grey h-11 rounded-lg bg-light-grey"
                      /> */}

                      <div className="w-8 h-8  bg-black rounded-full place-content-center mx-2">
                        <Image
                          className="mx-auto w-7 h-2"
                          src={'/image/logo.png'}
                          alt="wgmi logo"
                          width={28}
                          height={8}
                        />
                      </div>
                      <div className="text-sm font-medium">Wgmi</div>

                    </div>
                    <div className="flex">
                      <Input
                        className="text-dark-grey text-end rounded-l-[8px] rounded-r-[0px] w-14 h-11 border border-grey"
                        defaultValue={"10"}
                      />
                      <div className="flex place-content-center items-center bg-light-grey w-[60px] rounded-r-lg text-sm text-dark-grey border border-grey">
                        %
                      </div>
                    </div>
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