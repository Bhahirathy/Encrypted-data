"use client";

import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import { Upload } from 'lucide-react';
import { Trash } from '@phosphor-icons/react/dist/ssr';

interface UploadAvatarProps {
  avatarFile: {
    file: File | null;
    url: string | null;
  };
  setAvatarFile: (file: { file: File | null; url: string | null }) => void;
}

export default function UploadAvatar({ avatarFile, setAvatarFile }: UploadAvatarProps) {
  const onDrop = useCallback((acceptedFiles: Array<File>) => {
    const file = acceptedFiles[0];
    setAvatarFile({ file: file, url: URL.createObjectURL(file) });
  }, [setAvatarFile]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  const clearAvatar = () => {
    setAvatarFile({ file: null, url: "" });
  };

  return (
    <div className="rounded-lg border border-grey py-4 flex mt-4">
      <div className="mx-auto flex justify-center items-center flex-col">
        <div>
          <label htmlFor="avatar">
            <div
              className={twMerge([
                "w-[100px] h-[100px] border-dashed border border-grey relative rounded-lg flex justify-center items-center",
                isDragActive ? "bg-grey" : "bg-light-grey",
              ])}
              {...getRootProps()}
            >
              {avatarFile.url ? (
                <Image
                  width={100}
                  height={100}
                  className="w-full h-full object-cover rounded-lg"
                  src={avatarFile.url}
                  alt="Avatar Preview"
                />
              ) : (
                <Upload className="w-5 h-5 text-grey" />
              )}
              {isDragActive && (
                <div className="w-full h-full absolute top-0 flex flex-col justify-center items-center bg-slate-100/50">
                  <Upload className="w-5 h-5 text-grey" />
                </div>
              )}
            </div>
          </label>
        </div>
        <div className="font-semibold mt-5">
          {avatarFile.url ? (
            <div className="flex justify-between items-center">
              {avatarFile.file?.name}
              <div
                className="flex items-center justify-center px-0 bg-[#f4f4f4] h-6 w-6 rounded-[3px] ml-2 cursor-pointer"
                onClick={clearAvatar}
              >
                <Trash width={15} height={15} className="text-dark-grey" />
              </div>
            </div>
          ) : (
            "Drag & drop or click to upload"
          )}
        </div>
        <div className="text-sm font-medium text-dark-grey">
          You may change this after deploying your contract
        </div>
      </div>
    </div>
  );
}