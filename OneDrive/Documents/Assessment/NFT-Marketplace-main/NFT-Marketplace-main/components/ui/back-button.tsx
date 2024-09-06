import React, { MouseEvent, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CaretLeft } from "@phosphor-icons/react/dist/ssr";

type Ripple = {
  x: number;
  y: number;
  size: number;
};

const BackButton: React.FC = () => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const addRipple = (event: MouseEvent) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect();
    const size =
      rippleContainer.width > rippleContainer.height
        ? rippleContainer.width
        : rippleContainer.height;
    const x = event.clientX - rippleContainer.left - size / 2;
    const y = event.clientY - rippleContainer.top - size / 2;

    const newRipple: Ripple = { x, y, size };

    setRipples((prevRipples) => [...prevRipples, newRipple]);

    setTimeout(() => {
      setRipples((prevRipples) => prevRipples.slice(1));
    }, 500); // Adjust duration as needed
  };

  return (
    <Link href="/" className="ripple-container font-semibold lg:text-base text-sm flex items-center relative overflow-hidden" onClick={addRipple}>
      <CaretLeft width={16} height={16} className="lg:mr-4 mr-2" />
      Go back
      {ripples.map((ripple, index) => (
        <span
          key={index}
          className="ripple absolute bg-white opacity-75 rounded-full"
          style={{
            width: ripple.size,
            height: ripple.size,
            top: ripple.y,
            left: ripple.x,
          }}
        ></span>
      ))}
    </Link>
  );
};

export default BackButton;