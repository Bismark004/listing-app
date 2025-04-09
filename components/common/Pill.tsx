import React from "react";
import { PillProps } from "@/interfaces/index";

const Pill: React.FC<PillProps> = ({ label, onClick, isActive }) => {
    return (
        <button
            className={`px-2 py-2 rounded-full text-sm font-medium transition-all border
                        ${isActive ? " text-[#34967c]" : "text-black border-[#E9E9E9] border-[1.5px]"}
                        md:px-3 md:py-1 md:text-xs`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Pill;
