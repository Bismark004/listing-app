import { useState, useEffect } from 'react';

interface BookingDetails {
    propertyName: string;
    startDate: string;
    totalNights: number;
    bookingFee: number;
    price: number;
}

const BookingSection: React.FC<{
    price: number,
    onReserve: (details: BookingDetails) => void
}> = ({ price, onReserve }) => {
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [nights, setNights] = useState(1);
    const [total, setTotal] = useState(price);

    // Calculate number of nights and total price when dates change
    useEffect(() => {
        if (checkInDate && checkOutDate) {
            const start = new Date(checkInDate);
            const end = new Date(checkOutDate);

            // Calculate the difference in days
            const diffTime = end.getTime() - start.getTime();
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            if (diffDays > 0) {
                setNights(diffDays);
                setTotal(price * diffDays);
            }
        }
    }, [checkInDate, checkOutDate, price]);

    const handleReserve = () => {
        if (checkInDate && checkOutDate) {
            onReserve({
                propertyName: 'Sample Property',
                totalNights: nights,
                bookingFee: 50,
                price: price * nights,
            });
        }
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
            <h3 className="text-2xl font-semibold mb-2">${price} <span className="text-gray-500 text-lg font-normal">night</span></h3>

            <div className="mt-6 border border-gray-300 rounded-lg overflow-hidden">
                <div className="grid grid-cols-2 divide-x divide-gray-300">
                    <div className="p-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">CHECK-IN</label>
                        <input
                            type="date"
                            className="w-full focus:outline-none text-gray-700"
                            value={checkInDate}
                            onChange={(e) => setCheckInDate(e.target.value)}
                            min={new Date().toISOString().split('T')[0]}
                        />
                    </div>

                    <div className="p-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">CHECK-OUT</label>
                        <input
                            type="date"
                            className="w-full focus:outline-none text-gray-700"
                            value={checkOutDate}
                            onChange={(e) => setCheckOutDate(e.target.value)}
                            min={checkInDate || new Date().toISOString().split('T')[0]}
                        />
                    </div>
                </div>
            </div>

            {/* Reservation summary */}
            <div className="mt-6">
                <div className="flex justify-between py-2">
                    <span className="text-gray-700">${price} × {nights} nights</span>
                    <span className="font-medium">${price * nights}</span>
                </div>

                <div className="flex justify-between py-2">
                    <span className="text-gray-700">Cleaning fee</span>
                    <span className="font-medium">$50</span>
                </div>

                <div className="flex justify-between py-2">
                    <span className="text-gray-700">Service fee</span>
                    <span className="font-medium">$30</span>
                </div>

                <div className="border-t border-gray-300 mt-4 pt-4">
                    <div className="flex justify-between">
                        <span className="font-semibold">Total</span>
                        <span className="font-semibold">${total + 80}</span>
                    </div>
                </div>
            </div>

            {/* Reserve button */}
            <button 
              className="w-full mt-6 bg-pink-600 
              hover:bg-pink-700 text-white py-3 rounded-lg 
              font-medium transition-colors"
              onClick={handleReserve}

            >
                Reserve
            </button>

            <p className="text-center mt-4 text-gray-500 text-sm">You won't be charged yet</p>
        </div>
    );
};

export default BookingSection;