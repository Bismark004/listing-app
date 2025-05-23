 import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";

export default function PropertyPage() {
    
    const { id } = useRouter().query;
    const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);

    if (!property) return <p className="text-center mt-10">Property not found</p>;

    return (
        <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Section: Property Details */}
            <div className="md:col-span-2">
                <PropertyDetail property={property} />
                <ReviewSection reviews={property.reviews || []} />
            </div>
            
            {/* Right Section: Booking */}
            <div className="md:col-span-1">
                <BookingSection price={property.price}  />
            </div>
        </div>
    ); 
}
