"use client";

import React, { useState } from 'react';
import EditLayout from '@/components/collection/edit/EditLayout';
import AddPresaleModal from '@/components/collection/set-up/AddPresaleModal';
import EditPresaleModal from '@/components/collection/set-up/EditPresaleModal';
import CustomDatePicker from '@/components/collection/set-up/CustomDatePicker';
import MiniFooter from '@/components/layout/MiniFooter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faEarthAmerica, faTrashAlt, faGripVertical } from '@fortawesome/free-solid-svg-icons';

const SettingPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [presale, setPresale] = useState<any[]>([]);
  const [draggedItemIndex, setDraggedItemIndex] = useState<number | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleDelete = (index: number) => {
    setPresale(presale.filter((_, i) => i !== index));
  };

  const handleDragStart = (index: number) => {
    setDraggedItemIndex(index);
  };

  const handleDragOver = (index: number, e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (draggedItemIndex !== null && draggedItemIndex !== index) {
      const updatedPresale = [...presale];
      const draggedItem = updatedPresale[draggedItemIndex];
      updatedPresale.splice(draggedItemIndex, 1);
      updatedPresale.splice(index, 0, draggedItem);

      setDraggedItemIndex(index);
      setPresale(updatedPresale);
    }
  };

  const handleDrop = () => {
    setDraggedItemIndex(null);
  };

  return (
    <div className="flex flex-col h-full overflow-auto">
      <EditLayout>
        <div className="rounded-md bg-white flex-1 lg:px-11 lg:py-6 pt-5 px-4">
          <div className="lg:max-w-[540px] lg:min-w-[540px] h-full lg:pb-80 pb-8 ">
            <div className="text-sm font-medium lg:sr-only">
              Edit Collection / Details
            </div>
            <div className="text-2xl mt-3 lg:mt-0 font-semibold">
              Drop Setting
            </div>
            <div className="lg:mt-8 mt-6">
              <Tabs defaultValue="limit">
                <TabsList className="w-[300px] bg-light-grey rounded-full text-sm">
                  <TabsTrigger value="limit" className="w-full rounded-full text-sm">
                    Limited Edition
                  </TabsTrigger>
                  <TabsTrigger value="open" className="w-full rounded-full text-sm">
                    Open Edition
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="limit">
                  <div className="mt-8 flex flex-col gap-6">
                    <div>
                      <div className="font-medium">
                        Number of items
                      </div>
                      <Input
                        className="mt-3 rounded-lg placeholder:text-dark-grey"
                        placeholder="Example: 100"
                      />
                    </div>
                    <div>
                      <div className="font-medium">
                        Mint Start date & time
                      </div>
                      <div className="mt-3 w-full">
                        <CustomDatePicker selectedDate={selectedDate} onChange={handleDateChange} className="mt-3 rounded-lg placeholder:text-dark-grey w-full" />
                      </div>
                    </div>
                    <div>
                      <div className="font-medium">
                        Mint Stages
                      </div>
                      <AddPresaleModal setPresale={setPresale} />
                    </div>
                    {presale && presale.length > 0 && presale.map((item, index) => (
                      <div
                        key={index}
                        className="relative flex items-start rounded-md p-3 shadow-[0_0_10px_rgba(0,0,0,0.1)] group"
                        draggable
                        onDragStart={() => handleDragStart(index)}
                        onDragOver={(e) => handleDragOver(index, e)}
                        onDrop={handleDrop}
                      >
                        <div className="mr-3 border w-8 h-8 text-dark-grey font-semibold rounded-full border-light-grey bg-light-grey flex items-center justify-center">
                          <FontAwesomeIcon icon={faUsers} />
                        </div>
                        <div>
                          <div className="font-medium">
                            {item.name}
                          </div>
                          <div className="font-medium text-sm text-dark-grey">
                            September 4, 2024 at 5:54 PM GMT+5:30
                          </div>
                          <div className="font-medium text-sm text-dark-grey">
                            {item.price + " ETH • " + (item.duration?.days*24 + item.duration?.hours) + " hours • No allowlist"}
                          </div>
                        </div>
                        <div className="absolute top-4 right-6 text-dark-grey hidden group-hover:flex space-x-2 transition-all duration-300">
                          <FontAwesomeIcon
                            icon={faGripVertical}
                            className="cursor-pointer mx-2"
                          />
                          <EditPresaleModal setPresale={setPresale} index={index} presale={presale} />
                          <FontAwesomeIcon
                            icon={faTrashAlt}
                            className="cursor-pointer mx-2"
                            onClick={() => handleDelete(index)}
                          />
                        </div>
                      </div>
                    ))}
                    <div className="flex items-start rounded-md p-3 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
                      <div className="mr-3 border w-8 h-8 text-dark-grey font-semibold rounded-full border-light-grey bg-light-grey flex items-center justify-center">
                        <FontAwesomeIcon icon={faEarthAmerica} />
                      </div>
                      <div>
                        <div className="font-medium">
                          Public Stage
                        </div>
                        <div className="font-medium text-sm text-dark-grey">
                          September 4, 2024 at 5:54 PM GMT+5:30
                        </div>
                        <div className="font-medium text-sm text-dark-grey">
                          0 ETH
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="open">
                  <div className="mt-8 flex flex-col gap-6">
                    <div>
                      <div className="font-medium">
                        Mint Start date & time
                      </div>
                      <div className="mt-3">
                        <CustomDatePicker selectedDate={selectedDate} onChange={handleDateChange} className="" />
                      </div>
                    </div>
                    <div>
                      <div className="font-medium">
                        Mint Stages
                      </div>
                      <Input
                        className="mt-3 rounded-lg placeholder:text-dark-grey"
                        placeholder="Add Presale"
                      />
                    </div>
                    <div className="flex items-center">
                      <div className="border w-8 h-8 text-dark-grey font-semibold rounded-full border-grey bg-light-grey flex flex-col items-center justify-center">
                        1
                      </div>
                      <div className="ml-6">
                        <div className="font-semibold">
                          Public Stage
                        </div>
                        <div className="font-medium text-sm text-dark-grey">
                          <span>UnLimited</span>
                          <span className="ml-4">Price 0.23 APT</span>
                        </div>
                      </div>
                      <div className="ml-auto">
                        <div className="font-semibold text-3">
                          ENDS IN
                        </div>
                        <div className="flex gap-2.5 text-sm font-medium mt-0.5 text-dark-grey">
                          <div className="h-8 w-8 rounded bg-light-grey flex flex-col justify-center items-center">
                            02
                          </div>
                          <div className="h-8 w-8 rounded bg-light-grey flex flex-col justify-center items-center">
                            03
                          </div>
                          <div className="h-8 w-8 rounded bg-light-grey flex flex-col justify-center items-center">
                            32
                          </div>
                          <div className="h-8 w-8 rounded bg-light-grey flex flex-col justify-center items-center">
                            00
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </EditLayout>
      <div className="flex justify-end gap-4 px-11 py-3 lg:border-t border-grey">
        <Button variant="outline" className="w-48 rounded-lg">
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

export default SettingPage;