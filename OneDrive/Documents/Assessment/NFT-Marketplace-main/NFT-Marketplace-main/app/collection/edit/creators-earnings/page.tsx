"use client"

import EditLayout from "@/components/collection/edit/EditLayout";
import MiniFooter from "@/components/layout/MiniFooter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Money, PlusCircle, Trash } from "@phosphor-icons/react";
import { useState } from "react";

interface EarningBox {
  address: string;
  percentage: string;
}

export default function CreatorsEarningsPage() {
  const [earningBoxes, setEarningBoxes] = useState<EarningBox[]>([{ address: '', percentage: '' }]);

  const handleInputChange = (index: number, field: 'address' | 'percentage', value: string) => {
    const updatedBoxes = [...earningBoxes];
    if (field === 'percentage') {
      value = value.replace(/^0+/, '');
      if (value === '' || (/^\d+$/.test(value) && Number(value) < 101)) {
        updatedBoxes[index][field] = value;
      }
    } else {
      updatedBoxes[index][field] = value;
    }
    setEarningBoxes(updatedBoxes);
  };

  const addEarningBox = () => {
    setEarningBoxes([...earningBoxes, { address: '', percentage: '' }]);
  };

  const removeEarningBox = (index: number) => {
    const updatedBoxes = earningBoxes.filter((_, i) => i !== index);
    setEarningBoxes(updatedBoxes);
  };

  return (
    <div className="flex flex-col h-full overflow-auto">
      <EditLayout>
        <div className="rounded-md bg-white flex-1 lg:px-11 lg:py-6 pt-5 px-4">
          <div className="lg:max-w-[540px] lg:min-w-[540px] h-full pb-8 ">
            <div className="text-sm font-medium lg:sr-only">
              Edit Collection  /  Details
            </div>
            <div className="text-2xl mt-3 lg:mt-0 font-semibold">
              Creators Earnings
            </div>
            <div className="lg:mt-8 mt-6">
              <div className="font-medium text-sm text-dark-grey flex">
                <Money width={20} height={20} className="mr-2" />
                No fees are configured
              </div>
              {earningBoxes.map((box, index) => (
                <div key={index} className="flex gap-4 mt-3">
                  <Input
                    className="text-dark-grey rounded-lg flex-1 h-11"
                    placeholder="Enter address"
                    value={box.address}
                    onChange={(e) => handleInputChange(index, 'address', e.target.value)}
                  />
                  <div className="flex">
                    <Input
                      className="text-dark-grey border-r-0 rounded-r-none flex-1 h-11 w-[60px] rounded-l-lg text-sm border-y border-l border-grey focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0"
                      placeholder="0"
                      type="text"
                      value={box.percentage}
                      onChange={(e) => handleInputChange(index, 'percentage', e.target.value)}
                      max={100}
                    />
                    <div className="flex place-content-center items-center w-[60px] rounded-r-lg text-sm text-dark-grey border border-grey">
                      %
                    </div>
                  </div>
                  <Button variant={'ghost'} className="px-0 h-10 w-10 rounded-lg" onClick={() => removeEarningBox(index)}>
                    <Trash width={24} height={24} className="text-dark-grey" />
                  </Button>
                </div>
              ))}
              <div className="mt-3">
                <Button variant={'outline'} className="flex justify-start h-[50px] w-full rounded-lg" onClick={addEarningBox}>
                  <PlusCircle width={20} height={20} weight="fill" className="mr-2.5" />
                  <span className="text-dark-grey font-medium">
                    Add Earnings payout address and percentage
                  </span>
                </Button>
                <div className="text-grey text-sm font-medium mt-3">
                  Creator earnings configuration for this Collection will be recorded on chain. You'll need to approve changes using your wallet. Creator earnings can be up to 10%.
                </div>
              </div>
            </div>
          </div>
        </div>
      </EditLayout>
      <div className="flex justify-end gap-4 px-11 py-3 lg:border-t border-grey">
        <Button variant={'outline'} className="w-48 rounded-lg">
          Save Draft
        </Button>
        <Button className="bg-blue hover:bg-blue/85 rounded-lg w-48">
          Publish Drop
        </Button>
      </div>
      <MiniFooter />
    </div>
  );
}