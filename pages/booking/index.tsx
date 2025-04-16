import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// Define the interface for the booking details
interface BookingDetailsType {
  propertyName: string;
  price: number;
  bookingFee: number;
  totalNights: number;
  startDate: string;
  imageUrl: string;
}

export default function BookingPage() {
  const router = useRouter();
  const [bookingDetails, setBookingDetails] = useState<BookingDetailsType>({
    propertyName: "Property",
    price: 0,
    bookingFee: 0,
    totalNights: 1,
    startDate: "Not specified",
    imageUrl: "/assets/images/default.jpg",
  });

  // Update booking details when router query parameters change
  useEffect(() => {
    if (!router.isReady) return;

    const {
      propertyName,
      price,
      bookingFee,
      totalNights,
      startDate,
      imageUrl
    } = router.query;

    setBookingDetails({
      propertyName: propertyName as string || "Property",
      price: parseInt(price as string) || 0,
      bookingFee: parseInt(bookingFee as string) || 0,
      totalNights: parseInt(totalNights as string) || 1,
      startDate: startDate as string || "Not specified",
      imageUrl: imageUrl as string || "/assets/images/default.jpg",
    });
  }, [router.isReady, router.query]);

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BookingForm />
        <OrderSummary bookingDetails={bookingDetails} />
      </div>
    </div>
  );
}