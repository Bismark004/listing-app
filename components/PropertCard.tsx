import Image from "next/image";
import { PropertyProps } from "@/interfaces";

const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="flex flex-col shadow-lg rounded-lg overflow-hidden">
      <Image 
        src={property.image} 
        alt={property.name} 
        width={300} 
        height={200} 
        className="w-full h-[200px] object-cover"
      />

      <div className="flex flex-col p-4">
        {/* Categories */}
        <div className="grid grid-cols-2 gap-2 mt-2">
          {property.category.map((cat, index) => (
            <span key={index} className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-md">
              {cat}
            </span>
          ))}
        </div>

        {/* Property Name & Rating */}
        <div className="flex justify-between mt-2">
          <div>
            <h2 className="text-xl font-bold">{property.name}</h2>
            <p className="text-sm text-gray-500">
              {property.address.state}, {property.address.city}, {property.address.country}
            </p>
          </div>
          <div>
            <p className="text-yellow-500 font-bold">⭐ {property.rating}</p>
          </div>
        </div>

        {/* Offers & Pricing */}
        <div className="flex justify-between items-center mt-2">
          <div className="flex gap-4">
            <div className="flex items-center gap-1">
              <Image src="/assets/icons/bed.png" alt="bed" width={20} height={20} />
              <p>{property.offers.bed}</p>
            </div>
            <div className="flex items-center gap-1">
              <Image src="/assets/icons/hot-tub.png" alt="shower" width={20} height={20} />
              <p>{property.offers.shower}</p>
            </div>
            <div className="flex items-center gap-1">
              <Image src="/assets/icons/people.png" alt="occupants" width={20} height={20} />
              <p>{property.offers.occupants}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold">${property.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
