import { PropertyProps, LogoProps } from "@/interfaces";


export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Villa Ocean Breeze",
    address: {
      state: "Seminyak",
      city: "Bali",
      country: "Indonesia"
    },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6"
    },
    image: "/assets/listing-images/image-2.png",
    discount: "",
    description: "A beautiful villa with ocean views and private amenities.",
    reviews: [
      {
        name: "Alice",
        rating: 5,
        comment: "Amazing place, will definitely visit again!",
        avatar: "/assets/avatars/alice.png"
      },
      {
        name: "Bob",
        rating: 4,
        comment: "Great location, but the price could be lower.",
        avatar: "/assets/avatars/bob.png"
      }
    ]
  },
  {
    name: "Mountain Escape Chalet",
    address: {
      state: "Aspen",
      city: "Colorado",
      country: "USA"
    },
    rating: 4.70,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7"
    },
    image: "/assets/listing-images/image-3.png",
    discount: "30",
    description: "A cozy chalet in the mountains, perfect for a winter getaway.",
    reviews: [
      {
        name: "Charlie",
        rating: 5,
        comment: "Loved the fireplace and the peaceful surroundings.",
        avatar: "/assets/avatars/charlie.png"
      }
    ]
  },
  {
    name: "Cozy Desert Retreat",
    address: {
      state: "Palm Springs",
      city: "California",
      country: "USA"
    },
    rating: 4.92,
    category: ["Desert View", "Pet Friendly", "Self Checkin"],
    price: 1500,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3"
    },
    image: "/assets/listing-images/image-4.png",
    discount: "",
    description: "A serene retreat in the desert with breathtaking views.",
    reviews: [
      {
        name: "David",
        rating: 5,
        comment: "Perfect for a quiet getaway.",
        avatar: "/assets/avatars/david.png"
      }
    ]
  },
  {
    name: "City Lights Penthouse",
    address: {
      state: "New York",
      city: "New York",
      country: "USA"
    },
    rating: 4.85,
    category: ["City View", "Free WiFi", "24h Checkin"],
    price: 4500,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4"
    },
    image: "/assets/listing-images/image-5.png",
    discount: "15",
    description: "Luxurious penthouse with stunning city views and top-notch amenities.",
    reviews: [
      {
        name: "Emma",
        rating: 4,
        comment: "Beautiful place, but the price is a bit high.",
        avatar: "/assets/avatars/emma.png"
      }
    ]
  },
  {
    name: "Riverside Cabin",
    address: {
      state: "Queenstown",
      city: "Otago",
      country: "New Zealand"
    },
    rating: 4.77,
    category: ["Riverside", "Private Dock", "Free Kayaks"],
    price: 2800,
    offers: {
      bed: "3",
      shower: "2",
      occupants: "4-6"
    },
    image: "/assets/listing-images/image-6.png",
    discount: "20",
    description: "A cozy riverside cabin with outdoor activities.",
    reviews: [
      {
        name: "Frank",
        rating: 5,
        comment: "The perfect getaway for nature lovers.",
        avatar: "/assets/avatars/frank.png"
      }
    ]
  },
  {
    name: "Modern Beachfront Villa",
    address: {
      state: "Sidemen",
      city: "Bali",
      country: "Indonesia"
    },
    rating: 4.95,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 5000,
    offers: {
      bed: "5",
      shower: "4",
      occupants: "8-10"
    },
    image: "/assets/listing-images/image-7.png",
    discount: "",
    description: "A luxurious beachfront villa with personalized services.",
    reviews: []
  },
  {
    name: "Lakeside Chalet",
    address: {
      state: "Banff",
      city: "Alberta",
      country: "Canada"
    },
    rating: 4.65,
    category: ["Lakeside", "Mountain View", "Hiking Trails"],
    price: 2300,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "/assets/listing-images/image-8.png",
    discount: "10",
    description: "A scenic chalet by the lake with hiking trails nearby.",
    reviews: []
  },
  {
    name: "Tropical Garden Villa",
    address: {
      state: "Koh Samui",
      city: "Surat Thani",
      country: "Thailand"
    },
    rating: 4.80,
    category: ["Garden", "Free Parking", "Self Checkin"],
    price: 2750,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "5-6"
    },
    image: "/assets/listing-images/image-9.png",
    discount: "25",
    description: "A tropical garden villa with plenty of space and serenity.",
    reviews: []
  },
  {
    name: "Urban Loft",
    address: {
      state: "Berlin",
      city: "Berlin",
      country: "Germany"
    },
    rating: 4.60,
    category: ["City Center", "Free WiFi", "24h Checkin"],
    price: 2000,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3"
    },
    image: "/assets/listing-images/image-10.png",
    discount: "",
    description: "A stylish urban loft in the heart of the city.",
    reviews: []
  },
  {
    name: "Secluded Forest Cabin",
    address: {
      state: "Whistler",
      city: "British Columbia",
      country: "Canada"
    },
    rating: 4.72,
    category: ["Secluded", "Hot Tub", "Self Checkin"],
    price: 2600,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7"
    },
    image: "/assets/listing-images/image-11.png",
    discount: "40",
    description: "A secluded cabin in the forest with a hot tub and peaceful surroundings.",
    reviews: []
  },
  {
    name: "Cliffside Villa",
    address: {
      state: "Amalfi",
      city: "Salerno",
      country: "Italy"
    },
    rating: 4.93,
    category: ["Cliffside", "Infinity Pool", "Sea View"],
    price: 6000,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8"
    },
    image: "/assets/listing-images/image-12.png",
    discount: "50",
    description: "A stunning cliffside villa with breathtaking sea views.",
    reviews: []
  },
  {
    name: "Coastal Escape Villa",
    address: {
      state: "Noosa",
      city: "Queensland",
      country: "Australia"
    },
    rating: 4.83,
    category: ["Beachfront", "Pet Friendly", "Free Parking"],
    price: 3400,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6"
    },
    image: "/assets/listing-images/image-13.png",
    discount: "",
    description: "A beautiful coastal villa perfect for families and pets.",
    reviews: []
  },
  {
    name: "Historical Villa",
    address: {
      state: "Florence",
      city: "Tuscany",
      country: "Italy"
    },
    rating: 4.67,
    category: ["Historical", "Free Breakfast", "Self Checkin"],
    price: 2700,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4"
    },
    image: "/assets/listing-images/image-14.png",
    discount: "35",
    description: "A historic villa with classic architecture and free breakfast.",
    reviews: []
  },
  {
    name: "Downtown Apartment",
    address: {
      state: "Tokyo",
      city: "Tokyo",
      country: "Japan"
    },
    rating: 4.81,
    category: ["City Center", "Free WiFi", "Public Transport"],
    price: 2200,
    offers: {
      bed: "1",
      shower: "1",
      occupants: "2"
    },
    image: "/assets/listing-images/image-15.png",
    discount: "",
    description: "A cozy apartment in the bustling downtown area.",
    reviews: []
  },
  {
    name: "Luxury Safari Lodge",
    address: {
      state: "Serengeti",
      city: "Mara",
      country: "Tanzania"
    },
    rating: 4.97,
    category: ["Safari", "Guided Tours", "Free Breakfast"],
    price: 4500,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6"
    },
    image: "/assets/listing-images/image-16.png",
    discount: "",
    description: "An all-inclusive safari lodge for an unforgettable experience.",
    reviews: []
  },
  {
    name: "Countryside Cottage",
    address: {
      state: "Cotswolds",
      city: "Gloucestershire",
      country: "UK"
    },
    rating: 4.58,
    category: ["Countryside", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-4"
    },
    image: "/assets/listing-images/image-17.png",
    discount: "25",
    description: "A cozy cottage in the countryside, perfect for a peaceful retreat.",
    reviews: []
  },
  {
    name: "Riverfront Mansion",
    address: {
      state: "Paris",
      city: "Île-de-France",
      country: "France"
    },
    rating: 4.86,
    category: ["Riverfront", "Private Garden", "Self Checkin"],
    price: 5000,
    offers: {
      bed: "4",
      shower: "3",
      occupants: "6-8"
    },
    image: "/assets/listing-images/image-18.png",
    discount: "30",
    description: "A luxurious mansion on the riverfront with a private garden.",
    reviews: []
  },
  {
    name: "Ski Chalet",
    address: {
      state: "Zermatt",
      city: "Valais",
      country: "Switzerland"
    },
    rating: 4.75,
    category: ["Mountain View", "Ski Access", "Fireplace"],
    price: 3900,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "/assets/listing-images/image-18.png",
    discount: "",
    description: "A perfect ski chalet with amazing mountain views and ski access.",
    reviews: []
  },
  {
    name: "Island Paradise Villa",
    address: {
      state: "Mahe",
      city: "Victoria",
      country: "Seychelles"
    },
    rating: 4.98,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 6500,
    offers: {
      bed: "5",
      shower: "5",
      occupants: "8-10"
    },
    image: "/assets/listing-images/image-15.png",
    discount: "60",
    description: "A luxurious beachfront villa with private pool and personal chef.",
    reviews: []
  },
  {
    name: "Clifftop Retreat",
    address: {
      state: "Cape Town",
      city: "Western Cape",
      country: "South Africa"
    },
    rating: 4.78,
    category: ["Ocean View", "Private Pool", "Self Checkin"],
    price: 4100,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "/assets/listing-images/image-5.png",
    discount: "",
    description: "A peaceful retreat on a cliffside with stunning ocean views.",
    reviews: []
  }
];



  export const Logos: LogoProps[] = [
    {
      id: 1,
      name: "Rooms",
      image: "/assets/logos/Rooms.png",
    },
    {
      id: 2,
      name: "Mansions",
      image: "/assets/logos/mansion.png",
    },
    {
      id: 3,
      name: "CountrySide",
      image: "/assets/logos/farm 1.png",
    },
    {
      id: 4,
      name: "Villa",
      image: "/assets/logos/villa 1.png",
    },
    {
      id: 5,
      name: "Tropical",
      image: "/assets/logos/palm-tree 1.png",
    },
    {
      id: 6,
      name: "New",
      image: "/assets/logos/key-chain 1.png",
    },
    {
      id: 7,
      name: "Amazing Pool",
      image: "/assets/logos/swimming-pool 1.png",
    },
    {
      id: 8,
      name: "Beach House",
      image: "/assets/logos/Group.png",
    },
    {
      id: 9,
      name: "Island",
      image: "/assets/logos/island.png",
    },
    {
      id: 10,
      name: "Camping",
      image: "/assets/logos/tent 1.png",
    },
    {
      id: 11,
      name: "Apartments",
      image: "/assets/logos/apartment 1.png",
    },
    {
      id: 12,
      name: "House",
      image: "/assets/logos/home 1.png",
    },
    {
      id: 13,
      name: "Lakefront",
      image: "/assets/logos/cottage 1.png",
    },
    {
      id: 14,
      name: "Farm House",
      image: "/assets/logos/farm 1.png",
    },
    {
      id: 15,
      name: "Treehouse",
      image: "/assets/logos/treehouse.png",
    },
    {
      id: 16,
      name: "Cabins",
      image: "/assets/logos/cabin 1.png",
    },
    {
      id: 17,
      name: "Castles",
      image: "/assets/logos/castle-tower 1.png",
    }
  ];
  