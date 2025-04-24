import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { PropertyProps } from "@/interfaces";

// Define the interface for the booking details
interface BookingDetailsType {
  price: number;
  bookingFee: number;
  totalNights: number;
  startDate: string;
}

export default function BookingPage() {
  const router = useRouter();
  const [bookingDetails, setBookingDetails] = useState<BookingDetailsType>({
    price: 0,
    bookingFee: 0,
    totalNights: 1,
    startDate: "Not specified",
  });

  const [property, setProperty] = useState<PropertyProps | null>(null);
  const [isLoading, setLoading] = useState(true);



  // Update booking details when router query parameters change
  useEffect(() => {
    if (!router.isReady) return;

    const { price, bookingFee, totalNights, startDate, id } = router.query;

    const propertyFound = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);
    if (propertyFound) setProperty(propertyFound);

    setBookingDetails({
      price: parseInt(price as string) || 0,
      bookingFee: parseInt(bookingFee as string) || 0,
      totalNights: parseInt(totalNights as string) || 1,
      startDate: (startDate as string) || "Not specified",
    });

    setLoading(false);
  }, [router.isReady, router.query]);


  if (isLoading || !property) {
    return <div>Loading booking details....</div>
  }

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BookingForm />
        <OrderSummary
          bookingDetails={{
            ...bookingDetails,
            propertyName: property.name,
            imageUrl: property.image,

          }}
        />
      </div>
    </div>
  );
}
