import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { EndType } from "~/data";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getEndTypeBadgeConfig = (endType: EndType | null | undefined) => {
  const config = {
    [EndType.HE]: {
      text: "HE",
      className: "bg-green-500/80 text-white hover:bg-green-500/90",
    },
    [EndType.BE]: {
      text: "BE",
      className: "bg-red-500/80 text-white hover:bg-red-500/90",
    },
    [EndType.OE]: {
      text: "OE",
      className: "bg-yellow-500/80 text-white hover:bg-yellow-500/90",
    },
  };

  return config[endType];
};
