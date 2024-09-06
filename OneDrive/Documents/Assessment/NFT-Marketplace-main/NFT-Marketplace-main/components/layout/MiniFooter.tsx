import Image from 'next/image'
import { Switch } from "@/components/ui/switch"
import Link from 'next/link'

export default function MiniFooter() {
  return (
    <div className="px-8 py-2 lg:flex items-center border-t border-grey hidden">
      <div className='flex-1 flex gap-6'>
        <Image src='/image/sun-icon.svg' alt='sun-icon' width={24} height={24} />
        <Image src='/image/keyboard-icon.svg' alt='keyboard-icon' width={24} height={24} />
        <div className='flex items-center gap-3'>
          <div className='text-sm font-medium'>Lite</div>
          <Switch className='h-6' />
          <div className='text-sm font-medium text-grey flex gap-1'>
            Pro
            <Image src='/image/pro-icon.svg' alt='pro-icon' width={18} height={18} />
          </div>
        </div>
      </div>
      <div className='flex gap-6'>
        <div className='text-3 font-medium flex gap-1'>
          <Image src='/image/aptos-icon.png' alt='aptos-icon' width={18} height={16} />
          $802.00
        </div>
        <Link href={'#'}>
          <div className='text-3 font-medium flex gap-1'>
            About
          </div>
        </Link>

        <Link href={'#'}>
          <div className='text-3 font-medium flex gap-1'>
            Privacy policy
          </div>
        </Link>
      </div>
    </div>
  )
}