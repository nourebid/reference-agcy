import { SVGProps } from "react";
import { cn } from "@app/_lib/utils";

function LocationIcon({ className }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-5 fill-none stroke-gray-200", className)}
    >
      <path
        d="M10.0004 11.1917C11.4363 11.1917 12.6004 10.0276 12.6004 8.5917C12.6004 7.15576 11.4363 5.9917 10.0004 5.9917C8.56445 5.9917 7.40039 7.15576 7.40039 8.5917C7.40039 10.0276 8.56445 11.1917 10.0004 11.1917Z"
        strokeWidth="1.5"
      />
      <path
        d="M3.01675 7.07496C4.65842 -0.141705 15.3501 -0.133372 16.9834 7.08329C17.9417 11.3166 15.3084 14.9 13.0001 17.1166C11.3251 18.7333 8.67508 18.7333 6.99175 17.1166C4.69175 14.9 2.05842 11.3083 3.01675 7.07496Z"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default LocationIcon;
