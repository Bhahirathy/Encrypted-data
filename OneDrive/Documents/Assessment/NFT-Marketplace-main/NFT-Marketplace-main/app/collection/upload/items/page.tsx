"use client";

import React, { Suspense } from "react";
import EditLayout from "@/components/collection/edit/EditLayout";
import UploadFirstSection from "@/components/collection/upload/UploadFirstSection";
import UploadSecondSection from "@/components/collection/upload/UploadSecondSection";
import MiniFooter from "@/components/layout/MiniFooter";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";

function ItemsPageContent() {
  const searchParams = useSearchParams();
  const p = searchParams.get("p");

  return (
    <div className="flex flex-col h-full overflow-auto">
      <EditLayout>
        <div className="rounded-md bg-white lg:px-11 flex-1 lg:py-6 pt-5 px-4">
          <div className="lg:max-w-[540px] lg:min-w-[540px] h-full pb-8 ">
            <div className="text-sm font-medium lg:sr-only">
              Edit Collection / Details
            </div>
            <div className="text-2xl mt-3 lg:mt-0 font-semibold">Items</div>
            <div className="lg:mt-8 mt-6">
              {p === "preview" ? <UploadSecondSection /> : <UploadFirstSection />}
            </div>
          </div>
        </div>
      </EditLayout>
      <div className="flex justify-end gap-4 px-11 py-3 lg:border-t border-grey">
        <Button variant={"outline"} className="w-48 rounded-lg">
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

export default function ItemsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ItemsPageContent />
    </Suspense>
  );
}
