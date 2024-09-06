"use client";

import {
  APTOS_CONNECT_ACCOUNT_URL,
  AboutAptosConnect,
  AboutAptosConnectEducationScreen,
  AnyAptosWallet,
  AptosPrivacyPolicy,
  WalletItem,
  WalletSortingOptions,
  groupAndSortWallets,
  isAptosConnectWallet,
  isInstallRequired,
  truncateAddress,
  useWallet,
} from "@aptos-labs/wallet-adapter-react";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  Copy,
  Link,
  LogOut,
  User,
} from "lucide-react";
import { useCallback, useState } from "react";
import { Button } from "../ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useToast } from "../ui/use-toast";
import { WalletLogo } from "../common/Logo";

export function WalletSelector(walletSortingOptions: WalletSortingOptions) {
  const { account, connected, disconnect, wallet } = useWallet();
  const { toast } = useToast();

  const copyAddress = useCallback(async () => {
    if (!account?.address) return;
    try {
      await navigator.clipboard.writeText(account.address);
      toast({
        title: "Success",
        description: "Copied wallet address to clipboard.",
      });
    } catch {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to copy wallet address.",
      });
    }
  }, [account?.address, toast]);

  return connected ? (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="rounded-lg">
          {account?.ansName || truncateAddress(account?.address) || "Unknown"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onSelect={copyAddress} className="gap-2">
          <Copy className="h-4 w-4" /> Copy address
        </DropdownMenuItem>
        {wallet && isAptosConnectWallet(wallet) && (
          <DropdownMenuItem asChild>
            <a
              href={APTOS_CONNECT_ACCOUNT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2"
            >
              <User className="h-4 w-4" /> Account
            </a>
          </DropdownMenuItem>
        )}
        <DropdownMenuItem onSelect={disconnect} className="gap-2">
          <LogOut className="h-4 w-4" /> Disconnect
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
    <ConnectWalletDialog {...walletSortingOptions} />
  );
}

interface ConnectWalletDialogProps extends WalletSortingOptions { }

function ConnectWalletDialog({
  ...walletSortingOptions
}: ConnectWalletDialogProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { wallets = [] } = useWallet();
  const [moreView, setMoreView] = useState<boolean>(false);

  const { aptosConnectWallets, availableWallets, installableWallets } =
    groupAndSortWallets(wallets, walletSortingOptions);

  const hasAptosConnectWallets = !!aptosConnectWallets.length;

  const onDialogChange = useCallback((val: boolean) => {
    setIsDialogOpen(val)
    if (!val) {
      setMoreView(false)
    }
  }, []);
  return (

    <Dialog open={isDialogOpen} onOpenChange={onDialogChange}>
      <DialogTrigger asChild>
        <Button className="rounded-lg">Connect a Wallet</Button>
      </DialogTrigger>
      <DialogContent className="max-h-screen overflow-auto w-[360px] p-6">
        <AboutAptosConnect renderEducationScreen={renderEducationScreen}>
          {
            !moreView ?
              <>
                <DialogHeader className="pt-2">
                  <div className="flex justify-center">
                    <WalletLogo />
                  </div>
                  <DialogTitle className="flex flex-col text-center leading-snug font-semibold mt-4">
                    Connect to Wgmi
                  </DialogTitle>
                </DialogHeader>

                {hasAptosConnectWallets && (
                  <div className="flex flex-col gap-2">
                    {aptosConnectWallets.map((wallet) => (
                      <AptosConnectWalletRow
                        key={wallet.name}
                        wallet={wallet}
                        onConnect={close}
                      />
                    ))}

                    <div className="flex items-center gap-3 pt-[52px]">
                      <div className="h-px w-full bg-grey" />
                      Or
                      <div className="h-px w-full bg-grey" />
                    </div>
                  </div>
                )}

                <div className="flex flex-col gap-3 pt-4">
                  {availableWallets.map((wallet) => (
                    <WalletRow key={wallet.name} wallet={wallet} onConnect={close} />
                  ))}
                  {!!installableWallets.length && (
                    <Button
                      size="sm"
                      variant="link"
                      className="gap-2 text-blue font-medium text-sm"
                      onClick={() => setMoreView(true)}
                    >
                      More wallets
                    </Button>
                  )}
                </div>
              </> :
              <>
                <DialogHeader>
                  <DialogTitle className="text-lg font-semibold">
                    More Wallets
                  </DialogTitle>
                </DialogHeader>
                {installableWallets.map((wallet) => (
                  <WalletRow
                    key={wallet.name}
                    wallet={wallet}
                    onConnect={close}
                  />
                ))}
                <Button
                  size="sm"
                  variant="link"
                  className="gap-1 text-blue font-medium flex justify-start"
                  onClick={() => setMoreView(false)}
                >
                  <ChevronLeft className="w-4 h-4" />
                  Go Back
                </Button>
              </>
          }
        </AboutAptosConnect>
      </DialogContent>
    </Dialog>
  );
}

interface WalletRowProps {
  wallet: AnyAptosWallet;
  onConnect?: () => void;
}

function WalletRow({ wallet, onConnect }: WalletRowProps) {
  return (
    <WalletItem
      wallet={wallet}
      onConnect={onConnect}
    >
      {isInstallRequired(wallet) ? (
        <Button size="lg" variant={'secondary'} className="w-full flex justify-between p-3 h-14">
          <div className="flex items-center">
            <WalletItem.Icon className="h-8 w-8 mr-3" />
            <WalletItem.Name className="font-medium text-black" />
          </div>
          <WalletItem.InstallLink>
            <div className="w-[26px] h-[26px] rounded-full bg-blue place-content-center">
              <Link className="w-4 mx-auto h-4 text-white" />
            </div>
          </WalletItem.InstallLink>
        </Button>
      ) : (
        <WalletItem.ConnectButton asChild>
          <Button size="lg" variant={'secondary'} className="w-full flex justify-start p-3 h-14">
            <WalletItem.Icon className="h-8 w-8 mr-3" />
            <WalletItem.Name className="font-medium text-black" />
          </Button>
        </WalletItem.ConnectButton>
      )}
    </WalletItem>
  );
}

function AptosConnectWalletRow({ wallet, onConnect }: WalletRowProps) {
  return (
    <WalletItem wallet={wallet} onConnect={onConnect}>
      <WalletItem.ConnectButton asChild>
        <Button size="lg" variant={'secondary'} className="w-full flex justify-between p-3 h-14">
          <div className="flex items-center">
            <WalletItem.Icon className="h-8 w-8 mr-3" />
            <WalletItem.Name className="font-medium text-black" />
          </div>
          <div className="w-[26px] h-[26px] rounded-full bg-blue place-content-center">
            <ArrowRight className="w-5 mx-auto h-5 text-white" />
          </div>
        </Button>
      </WalletItem.ConnectButton>
    </WalletItem>
  );
}

function renderEducationScreen(screen: AboutAptosConnectEducationScreen) {
  return (
    <>
      <DialogHeader className="grid grid-cols-[1fr_4fr_1fr] items-center space-y-0">
        <Button variant="ghost" size="icon" onClick={screen.cancel}>
          <ArrowLeft />
        </Button>
        <DialogTitle className="leading-snug text-base text-center">
          About Aptos Connect
        </DialogTitle>
      </DialogHeader>

      <div className="flex h-[162px] pb-3 items-end justify-center">
        <screen.Graphic />
      </div>
      <div className="flex flex-col gap-2 text-center pb-4">
        <screen.Title className="text-xl" />
        <screen.Description className="text-sm text-muted-foreground [&>a]:underline [&>a]:underline-offset-4 [&>a]:text-foreground" />
      </div>

      <div className="grid grid-cols-3 items-center">
        <Button
          size="sm"
          variant="ghost"
          onClick={screen.back}
          className="justify-self-start"
        >
          Back
        </Button>
        <div className="flex items-center gap-2 place-self-center">
          {screen.screenIndicators.map((ScreenIndicator, i) => (
            <ScreenIndicator key={i} className="py-4">
              <div className="h-0.5 w-6 transition-colors bg-muted [[data-active]>&]:bg-foreground" />
            </ScreenIndicator>
          ))}
        </div>
        <Button
          size="sm"
          variant="ghost"
          onClick={screen.next}
          className="gap-2 justify-self-end"
        >
          {screen.screenIndex === screen.totalScreens - 1 ? "Finish" : "Next"}
          <ArrowRight size={16} />
        </Button>
      </div>
    </>
  );
}
