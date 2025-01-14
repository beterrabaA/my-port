import { ComponentPropsWithoutRef } from "react";

import { twMerge } from "tailwind-merge";

import GrainBackground from "./GrainBackground";

export const Card = ({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={twMerge(
        "relative z-0 overflow-hidden rounded-3xl bg-gray-800 after:pointer-events-none after:absolute after:inset-0 after:z-10 after:rounded-3xl after:outline after:outline-2 after:-outline-offset-2 after:outline-white/20 after:content-['']",
        className,
      )}
      {...props}
    >
      <GrainBackground />
      {children}
    </div>
  );
};
