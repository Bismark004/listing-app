import Image from "next/image";
import { ReviewProps } from "@/interfaces";

const ReviewSection: React.FC<{ reviews: ReviewProps[] }> = ({ reviews }) => {
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold mb-6">Reviews</h3>
      
      {reviews.length === 0 ? (
        <p className="text-gray-500">No reviews yet.</p>
      ) : (
        reviews.map((review, index) => (
          <div key={index} className="border-b pb-6 mb-6">
            <div className="flex items-start mb-3">
              <Image 
                src={review.avatar} 
                alt={`${review.name}'s avatar`}
                className="rounded-full mr-4"
                width={48}
                height={48}
              />
              
              <div>
                <p className="font-bold">{review.name}</p>
                <p className="text-yellow-500">★ {review.rating}</p>
              </div>
            </div>
            
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ReviewSection;