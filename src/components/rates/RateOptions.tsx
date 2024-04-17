import { useEffect, useRef, useState } from "react";
import caretDown from "@/assets/caretdown-grey.svg";

const RateOptions = ({ size, type, setSize, setType }) => {
  const sizeref = useRef<HTMLDivElement>(null);
  const typeref = useRef<HTMLDivElement>(null);

  const [showContainerSize, setShowContainerSize] = useState(false);
  const [showContainerType, setShowContainerType] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu, then close the menu
      if (
        showContainerSize &&
        sizeref.current &&
        !sizeref.current.contains(e.target)
      ) {
        setShowContainerSize(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showContainerSize]);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu, then close the menu
      if (
        showContainerType &&
        typeref.current &&
        !typeref.current.contains(e.target)
      ) {
        setShowContainerType(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showContainerType]);
  return (
    <div className="flex items-center gap-x-3">
      <div className="relative" ref={sizeref}>
        <div
          className="flex items-center gap-x-2 px-4 py-3 border-solid border-[1px] border-[#9CA3AF] rounded w-fit cursor-pointer"
          onClick={() => setShowContainerSize(!showContainerSize)}
        >
          <p>{size}</p>
          <span>
            <img src={caretDown} alt="caret down" />
          </span>
        </div>
        {showContainerSize && (
          <div className="absolute w-[100px] p-1 text-sm black-text-3 bg-white shadow-[1px_4px_12px_-1px_rgba(44,78,39,0.15)] rounded">
            <p
              className={`p-2 cursor-pointer ${size === "20FT" ? "bg-green-100 text-[#139C33]" : "text-[#1F2937]"} rounded`}
              onClick={() => {
                setSize("20FT");
                setShowContainerSize(false);
              }}
            >
              20FT
            </p>
            <p
              className={`p-2 ${size === "40FT" ? "bg-green-100 text-[#139C33]" : "text-[#1F2937]"} cursor-pointer rounded`}
              onClick={() => {
                setSize("40FT");
                setShowContainerSize(false);
              }}
            >
              40FT
            </p>
            <p
              className={`p-2 ${size === "40FT HC" ? "bg-green-100 text-[#139C33]" : "text-[#1F2937]"} cursor-pointer rounded`}
              onClick={() => {
                setSize("40FT HC");
                setShowContainerSize(false);
              }}
            >
              40FT HC
            </p>
          </div>
        )}
      </div>
      <div className="relative" ref={typeref}>
        <div
          className="flex items-center gap-x-2 px-4 py-3 border-solid border-[1px] border-[#9CA3AF] rounded w-fit cursor-pointer"
          onClick={() => setShowContainerType(!showContainerType)}
        >
          <p>{type}</p>
          <span>
            <img src={caretDown} alt="caret down" />
          </span>
        </div>
        {showContainerType && (
          <div className="absolute w-[100px] p-1 text-sm black-text-3 bg-white shadow-[1px_4px_12px_-1px_rgba(44,78,39,0.15)] rounded">
            <p
              className={`p-2 cursor-pointer ${type === "DRY" ? "bg-green-100 text-[#139C33]" : "text-[#1F2937]"} rounded`}
              onClick={() => {
                setType("DRY");
                setShowContainerType(false);
              }}
            >
              DRY
            </p>
            <p
              className={`p-2 cursor-pointer ${type === "REEFER" ? "bg-green-100 text-[#139C33]" : "text-[#1F2937]"} rounded`}
              onClick={() => {
                setType("REEFER");
                setShowContainerType(false);
              }}
            >
              REEFER
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RateOptions;
