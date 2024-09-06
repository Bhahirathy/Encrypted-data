"use client";

import { Upload } from 'lucide-react';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import { Image as ImageIcon } from "@phosphor-icons/react/dist/ssr";

interface UploadAvatarProps {
  file: File | null;
  setFile: (file: File | null) => void;
}

export default function UploadAvatar({ setFile, file }: UploadAvatarProps) {
  const onDrop = useCallback((acceptedFiles: Array<File>) => {
    const file = acceptedFiles[0];
    setFile(file);
  }, [setFile]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop
  });

  const previewUrl = file ? URL.createObjectURL(file) : '';

  return (
    <div {...getRootProps()}>
      <label htmlFor='avatar'>
        <div className={twMerge([
          "w-16 h-16 border-dashed border border-grey relative rounded-lg flex justify-center items-center",
          isDragActive ? "bg-grey" : "bg-light-grey"
        ])}>
          {
            previewUrl ? (
              <Image width={100} height={100} className="w-full h-full object-cover rounded-lg" src={previewUrl} alt="" />
            ) : (
              <ImageIcon className="w-5 h-5 text-grey" />
            )
          }
          {
            isDragActive && (
              <div className='w-full h-full absolute top-0 flex flex-col justify-center items-center bg-slate-100/50'>
                <ImageIcon className="w-5 h-5 text-grey" />
              </div>
            )
          }
        </div>
      </label>
    </div>
  )
}