import { ChartLine, Coins, Pulse, TrendUp } from "@phosphor-icons/react/dist/ssr";

export default function MobileBottomTab() {
  return (
    <div className="flex flex-1 justify-around px-4 py-2 gap-2 lg:hidden">
      <div className="flex flex-col justify-center hover:bg-light-grey py-2 rounded h-full w-full">
        <Coins className="w-5 h-5 mx-auto" />
        <div className="mt-1 font-medium text-center">
          Items
        </div>
      </div>
      <div className="flex flex-col justify-center hover:bg-light-grey py-2 rounded h-full w-full text-grey">
        <Coins className="w-5 h-5 mx-auto" />
        <div className="mt-1 font-medium text-center">
          Offer
        </div>
      </div>
      <div className="flex flex-col justify-center hover:bg-light-grey py-2 rounded h-full w-full text-grey">
        <ChartLine className="w-5 h-5 mx-auto" />
        <div className="mt-1 font-medium text-center">
          Chart
        </div>
      </div>
      <div className="flex flex-col justify-center hover:bg-light-grey py-2 rounded h-full w-full text-grey">
        <TrendUp className="w-5 h-5 mx-auto" />
        <div className="mt-1 font-medium text-center">
          Analytics
        </div>
      </div>
      <div className="flex flex-col justify-center hover:bg-light-grey rounded h-full w-full text-grey">
        <Pulse className="w-5 h-5 mx-auto" />
        <div className="mt-1 font-medium text-center">
          Activity
        </div>
      </div>
    </div>
  )
}