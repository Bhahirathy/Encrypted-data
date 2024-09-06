"use client"
import { PlusCircle } from "@phosphor-icons/react/dist/ssr";
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image'

type Props = {}

export default function PreRevealAvatarUpload({ }: Props) {
  const [avatarFile, setAvatarFile] = useState<{
    file: File | null,
    url: string | null
  }>({ file: null, url: "" });

  const onDrop = useCallback((acceptedFiles: Array<File>) => {
    const file = acceptedFiles[0];
    setAvatarFile({ file: file, url: URL.createObjectURL(file) });
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop
  });

  return (
    <div className="w-[216px] ">
      <div {...getRootProps()} className="h-[186px] relative rounded-t-lg bg-light-grey flex items-center place-content-center">
        {
          avatarFile.url ? (
            <Image width={186} height={186} className="w-full h-full object-cover rounded-t-lg" src={avatarFile.url} alt="" />
          ) : (
            <PlusCircle width={24} height={24} className="w-6 h-6 text-grey" />
          )
        }
        {
          isDragActive && (
            <div className='w-full h-full absolute top-0 flex flex-col justify-center items-center bg-slate-100/50'>
            </div>
          )
        }
      </div>
      <div className="h-[104px] border border-grey rounded-b-lg py-4 px-3">
        <div className="text-sm font-medium">
          Monkie Man
        </div>
      </div>
    </div>
  )
}