"use client";
import { useIsLessThan1024 } from "../../hook/useIsMobile";

export default function MobileNavigation() {
  const isLessThan1024 = useIsLessThan1024();
  return (
    <div>
      <div>
        {isLessThan1024 && (
          <div className="flex flex-col gap-2">
            <span className="h-[1px] bg-[#F4E5BE] w-[25px]"></span>
            <span className="h-[1px] bg-[#F4E5BE] w-[25px]"></span>
          </div>
        )}
      </div>
    </div>
  );
}
