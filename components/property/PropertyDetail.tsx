import { PropertyProps } from "@/interfaces/index";
import Image from "next/image";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="container mx-auto p-6 max-w-6xl">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">{property.name}</h1>
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <span className="flex items-center text-yellow-500 font-semibold">
            ★ {property.rating} stars
          </span>
          <span className="text-gray-600">
            {property.address.city}, {property.address.country}
          </span>
        </div>
      </div>

      {/* Image Section */}
      <div className="mb-8">
        <Image 
          src={property.image} 
          alt={property.name} 
          width={1200}
          height={800}
          className="rounded-lg w-full object-cover"
          priority
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Description Section */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Description</h2>
          <p className="text-gray-700 leading-relaxed">
            {property.description || "No description available"}
          </p>
        </div>

        {/* Amenities Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">What this place offers</h2>
          <ul className="grid grid-cols-1 gap-2">
            {property.category.map((amenity, index) => (
              <li 
                key={index} 
                className="bg-gray-100 p-3 rounded-md text-gray-700 flex items-center"
              >
                {amenity}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;