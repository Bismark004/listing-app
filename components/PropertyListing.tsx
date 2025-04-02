import { PROPERTYLISTINGSAMPLE } from "@/constants";
import PropertyCard from "@/components/PropertCard";

const PropertyListing: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {PROPERTYLISTINGSAMPLE.map((property) => (
        <PropertyCard key={property.name} property={property} />
      ))}
    </div>
  );
};

export default PropertyListing;
