import Image from "next/image";

export function NavLogo() {
  return (
    <div className="lg:w-8 lg:h-8 h-6 w-6 bg-black rounded-full place-content-center">
      <Image
        className="mx-auto lg:w-[26px] lg:h-[8px] w-5 h-1.5"
        src={'/image/logo.png'}
        alt="wgmi logo"
        width={26}
        height={8}
      />
    </div>
  )
}

export function WalletLogo() {
  return (
    <div className="w-11 h-11 bg-black rounded-full place-content-center">
      <Image
        className="mx-auto"
        src={'/image/logo.png'}
        alt="wgmi logo"
        width={36}
        height={12}
      />
    </div>
  )
}