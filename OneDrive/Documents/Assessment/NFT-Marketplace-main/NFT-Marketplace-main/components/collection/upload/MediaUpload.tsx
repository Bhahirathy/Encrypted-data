"use client";
import { Image as ImageIcon } from "@phosphor-icons/react/dist/ssr";
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';

interface MediaUploadProps {
  setProgress: (progress: number) => void;
}

export default function MediaUpload({ setProgress }: MediaUploadProps) {
  const [avatarFiles, setAvatarFiles] = useState<Array<{ file: File, url: string }>>([]);

  const onDrop = useCallback((acceptedFiles: Array<File>) => {
    const filesWithUrls = acceptedFiles.map(file => ({
      file: file,
      url: URL.createObjectURL(file)
    }));
    
    setAvatarFiles(prevFiles => {
      const newFiles = [...prevFiles, ...filesWithUrls];
      const progress = newFiles.length 
      setProgress(progress);
      return newFiles;
    });
  }, [setProgress]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true
  });
    const randomImages = Array.from(
    { length: Math.min(4, avatarFiles.length) }, 
    () => avatarFiles[Math.floor(Math.random() * avatarFiles.length)] 
  );

  return (
    <div {...getRootProps()}>
      <input 
        type="file" 
        accept="image/*" 
        hidden 
        name="avatar" 
        id="avatar" 
        {...getInputProps()} 
      />
      <label htmlFor="avatar">
        <div className={twMerge([
          "w-full flex flex-wrap gap-2 border-dashed border border-grey p-2 relative rounded-lg",
          isDragActive ? "bg-grey" : "bg-light-grey"
        ])}>
          {randomImages.length > 0  ? (
            randomImages.map(({ file, url }) => (
              <div key={file.name} className="relative w-[100px] h-[100px]">
                <Image 
                  width={100} 
                  height={100} 
                  className="w-full h-full object-cover rounded-lg" 
                  src={url} 
                  alt={file.name} 
                />
              </div>
            ))
          ) : (
            <div className="flex justify-center items-center w-full h-full">
              <ImageIcon className="w-5 h-5 text-grey" />
            </div>
          )}
          {isDragActive && (
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-slate-100/50 rounded-lg">
              <ImageIcon className="w-5 h-5 text-grey" />
            </div>
          )}
        </div>

      </label>
    </div>
  );
}
