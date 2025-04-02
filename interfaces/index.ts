export interface PropertyProps {
    name: string;
    address: {
        state: string;
        city: string;
        country: string;
    };
    rating: number;
    category:string[];
    price: number;
    offers: {
        bed: string;
        shower: string;
        occupants: string;
    }
    image: string;
    discount?: string;
    description?:string;
    reviews?: ReviewProps[];

};

export interface ReviewProps {
    name: string;
    rating: number;
    comment: string;
    avatar: string;
}

export interface PillProps {
    label: string;
    onClick: () => void;
    isActive: boolean;
};

export interface LogoProps {
    id: number;
    name: string;
    image: string;
}


