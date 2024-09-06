import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Upload, Plus } from "@phosphor-icons/react/dist/ssr"
import Image from 'next/image'
import { useState, useRef } from 'react'
import { Button } from "@/components/ui/button"

type AddPresaleModalProps = {
  setPresale: React.Dispatch<React.SetStateAction<any[]>>
};

export default function AddPresaleModal({ setPresale }: AddPresaleModalProps) {
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [presaleName, setPresaleName] = useState('');
  const [salePrice, setSalePrice] = useState('');
  const [duration, setDuration] = useState({ days: 0, hours: 0, mins: 0 });
  const [walletMintLimit, setWalletMintLimit] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      setFile(event.dataTransfer.files[0]);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleDownload = () => {
    if (file) {
      const url = URL.createObjectURL(file);
      const a = document.createElement('a');
      a.href = url;
      a.download = file.name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } else {
      const csvContent = "wallet_address,mint_limit,price\n";
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'allowlist_template.csv';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  const handleAddPresale = () => {
    const presaleData = {
      name: presaleName,
      price: salePrice,
      duration: duration,
      walletMintLimit: walletMintLimit,
      allowlist: file ? file.name : null
    };

    // Append new presale data to localStorage
    const existingPresales = JSON.parse(localStorage.getItem('presales') || '[]');
    existingPresales.push(presaleData);
    localStorage.setItem('presales', JSON.stringify(existingPresales));

    // Update the presale state
    setPresale(prev => [...prev, presaleData]);

    // Close the dialog
    setDialogOpen(false);
  };

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <div className="mt-3 rounded-lg flex items-center text-blue" onClick={() => setDialogOpen(true)}>
          <Plus className="text-blue mr-2" width={16} height={16} />
          Add a presale
        </div>
      </DialogTrigger>
      <DialogContent className="w-[436px] rounded-2xl p-0">
        <DialogHeader className="border-b border-grey px-5 py-4">
          <DialogTitle>Add a presale</DialogTitle>
        </DialogHeader>
        <div className="px-6 pb-7 pt-2 flex flex-col gap-6">
          <div>
            <div className="font-medium">Name</div>
            <Input
              className="mt-3 rounded-lg placeholder:text-dark-grey"
              placeholder="Presale name"
              value={presaleName}
              onChange={(e) => setPresaleName(e.target.value)}
            />
          </div>
          <div>
            <div className="font-medium">Sale Price</div>
            <div className="relative md:grow-0 flex items-center">
              <Input
                className="mt-3 rounded-lg placeholder:text-dark-grey"
                placeholder="Example 0.01"
                value={salePrice}
                onChange={(e) => setSalePrice(e.target.value)}
              />
              <div className="text-grey flex absolute right-2.5 top-5 items-center">
                <Image src='/image/aptos-icon.png' alt='aptos-icon' className="w-4 h-4 mr-2.5" width={16} height={16} />
                APT
              </div>
            </div>
          </div>
          <div>
            <div className="font-medium">Duration</div>
            <div className="flex gap-3 mt-3">
              <div className="w-full">
                <div className="text-dark-grey text-3 font-semibold">DAYS</div>
                <Input
                  className="rounded-lg bg-light-grey border-none placeholder:text-dark-grey"
                  placeholder="0"
                  value={duration.days}
                  onChange={(e) => setDuration({ ...duration, days: parseInt(e.target.value) || 0 })}
                />
              </div>
              <div className="w-full">
                <div className="text-dark-grey text-3 font-semibold">HOURS</div>
                <Input
                  className="rounded-lg bg-light-grey border-none placeholder:text-dark-grey"
                  placeholder="0"
                  value={duration.hours}
                  onChange={(e) => setDuration({ ...duration, hours: parseInt(e.target.value) || 0 })}
                />
              </div>
              <div className="w-full">
                <div className="text-dark-grey text-3 font-semibold">MINS</div>
                <Input
                  className="rounded-lg bg-light-grey border-none placeholder:text-dark-grey"
                  placeholder="0"
                  value={duration.mins}
                  onChange={(e) => setDuration({ ...duration, mins: parseInt(e.target.value) || 0 })}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="font-medium">Pre-Wallet mint limit (optional)</div>
            <Switch checked={walletMintLimit} onCheckedChange={setWalletMintLimit} />
          </div>
          <div>
            <div className="font-medium">Allowlist</div>
            <div className="mt-3 text-sm rounded-lg text-dark-grey">
              You can set specific mint limits and prices per wallet, which will override the global sale price and mint limit above for the specified
            </div>
            <div className="py-4 px-2 border rounded-lg border-grey mt-3">
              <div
                className="border-dashed border-grey flex py-3 justify-center border rounded-lg cursor-pointer"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={handleClick}
              >
                <div className="flex flex-col items-center justify-center">
                  <Upload className="w-[18px] h-[18px] text-dark-grey" width={18} height={18} />
                  <div className="mt-2.5 font-medium text-3">
                    {file ? file.name : "Drag and drop a CSV"}
                  </div>
                  <div className="mt-1 font-medium text-3 text-dark-grey">
                    {file ? "" : "or select from computer"}
                  </div>
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept=".csv"
                  style={{ display: 'none' }}
                />
              </div>
              <div
                className="mt-5 text-center text-sm text-blue cursor-pointer"
                onClick={handleDownload}
              >
                {file ? "Download Uploaded CSV" : "Download CSV Template"}
              </div>
            </div>
          </div>
          <Button
            className="bg-blue hover:bg-blue/85 text-white rounded-lg w-full"
            onClick={handleAddPresale}
          >
            Done
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}