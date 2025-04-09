import React from "react";
import Pill from "@/components/common/Pill";
import Image from "next/image";

const FilterSection: React.FC = () => {
    const [activeFilter, setActiveFilter] = React.useState<string | null>(null);

    const filters = [
        "All",
        "Top Villa",
        "Self CheckIn",
        "Free Reschedule",
        "Book Now Pay Later",
        "Instant Book",
    ];

    const handleFilterClick = (filter: string) => {
        setActiveFilter(filter === activeFilter ? null : filter);
    };

    return (
        <div className="hidden md:flex flex-col gap-4 border-b border-red-600 py-4 px-4 md:px-0 ">
        
            <div className="grid grid-cols-2 md:grid-cols-3 lg:flex flex-wrap gap-2 md:gap-4 py-2">
                {filters.map((filter) => (
                    <Pill
                        key={filter}
                        label={filter}
                        onClick={() => handleFilterClick(filter)}
                        isActive={filter === activeFilter}
                    />
                ))}
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between">
                <button className="flex items-center gap-2 px-3 py-2 text-sm rounded-full border border-[#E9E9E9] hover:border-gray-800 transition-all">
                    Filter
                    <Image
                        src="/assets/icons/filter.png"
                        alt="filter"
                        width={20}
                        height={20}
                    />
                </button>

                <div className="flex items-center rounded-full border-[1.5px] border-[#E9E9E9] gap-1 text-sm px-3 py-2">
                    <span className="text-gray-600">Sort by:</span>
                    <select className="border-none outline-none bg-transparent font-medium text-sm">
                        <option>Highest Price</option>
                        <option>Lowest Price</option>
                        <option>Newest Listing</option>
                        <option>Oldest Listing</option>
                        <option>Rating</option>
                        <option>Distance</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default FilterSection;
