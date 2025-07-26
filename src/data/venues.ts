export interface Cafe {
  id: string;
  name: string;
  address: string;
  rating: number;
  priceRange: string;
  image: string;
  specialty: string;
}

export interface Restaurant {
  id: string;
  name: string;
  address: string;
  rating: number;
  priceRange: string;
  image: string;
  cuisine: string;
}

export interface LunchPlace {
  id: string;
  name: string;
  address: string;
  rating: number;
  priceRange: string;
  image: string;
  cuisine: string;
}

export interface Photobooth {
  id: string;
  name: string;
  address: string;
  rating: number;
  priceRange: string;
  image: string;
  features: string;
}

export const cafes: Cafe[] = [
  {
    id: "1",
    name: "The Coffee House",
    address: "123 Nguyễn Huệ, Q1, TP.HCM",
    rating: 4.5,
    priceRange: "50k - 100k",
    image: "https://picsum.photos/300/200?random=1",
    specialty: "Cà phê sữa đá, Bánh ngọt"
  },
  {
    id: "2", 
    name: "Highlands Coffee",
    address: "456 Lê Lợi, Q1, TP.HCM",
    rating: 4.3,
    priceRange: "60k - 120k",
    image: "https://picsum.photos/300/200?random=2",
    specialty: "Freeze, Bánh mì"
  },
  {
    id: "3",
    name: "Starbucks",
    address: "789 Đồng Khởi, Q1, TP.HCM", 
    rating: 4.4,
    priceRange: "80k - 150k",
    image: "https://picsum.photos/300/200?random=3",
    specialty: "Frappuccino, Cake"
  },
  {
    id: "4",
    name: "Trung Nguyên Coffee",
    address: "321 Pasteur, Q3, TP.HCM",
    rating: 4.2,
    priceRange: "40k - 90k", 
    image: "https://picsum.photos/300/200?random=4",
    specialty: "Cà phê phin, Bánh flan"
  },
  {
    id: "5",
    name: "Phúc Long Coffee & Tea",
    address: "654 Hai Bà Trưng, Q3, TP.HCM",
    rating: 4.6,
    priceRange: "45k - 95k",
    image: "https://picsum.photos/300/200?random=5", 
    specialty: "Trà sữa, Bánh croissant"
  }
];

// Quán ăn trưa lãng mạn cho hẹn hò
export const lunchPlaces: LunchPlace[] = [
  {
    id: "1",
    name: "Quán Cơm Tấm Sài Gòn",
    address: "246 Bùi Viện, Q1, TP.HCM",
    rating: 4.7,
    priceRange: "50k - 120k",
    image: "https://picsum.photos/300/200?random=21",
    cuisine: "Việt Nam"
  },
  {
    id: "2",
    name: "Phở Hòa Pasteur",
    address: "421A Pasteur, Q3, TP.HCM",
    rating: 4.8,
    priceRange: "60k - 100k",
    image: "https://picsum.photos/300/200?random=22",
    cuisine: "Việt Nam"
  },
  {
    id: "3",
    name: "Bún Bò Huế Cô Ba",
    address: "159 Pasteur, Q1, TP.HCM",
    rating: 4.9,
    priceRange: "40k - 80k",
    image: "https://picsum.photos/300/200?random=23",
    cuisine: "Việt Nam"
  },
  {
    id: "4",
    name: "Lotteria",
    address: "135 Nguyễn Thái Học, Q1, TP.HCM",
    rating: 4.1,
    priceRange: "80k - 200k",
    image: "https://picsum.photos/300/200?random=24",
    cuisine: "Fast Food"
  },
  {
    id: "5",
    name: "Pizza Hut",
    address: "987 Trần Hưng Đạo, Q5, TP.HCM",
    rating: 4.2,
    priceRange: "150k - 400k",
    image: "https://picsum.photos/300/200?random=25",
    cuisine: "Tây"
  }
];

// Photobooth cho những kỷ niệm đẹp
export const photobooths: Photobooth[] = [
  {
    id: "1",
    name: "Heekcaa Studio",
    address: "123 Nguyễn Đình Chiểu, Q3, TP.HCM",
    rating: 4.8,
    priceRange: "200k - 500k",
    image: "https://picsum.photos/300/200?random=31",
    features: "Concept couple, Props xinh, Makeup"
  },
  {
    id: "2",
    name: "Oneshot Studio",
    address: "456 Võ Văn Tần, Q3, TP.HCM",
    rating: 4.7,
    priceRange: "150k - 400k",
    image: "https://picsum.photos/300/200?random=32",
    features: "Style vintage, Ánh sáng đẹp"
  },
  {
    id: "3",
    name: "Photo Corner",
    address: "789 Lê Văn Sỹ, Q3, TP.HCM",
    rating: 4.6,
    priceRange: "100k - 300k",
    image: "https://picsum.photos/300/200?random=33",
    features: "Chụp nhanh, In ảnh ngay"
  },
  {
    id: "4",
    name: "Memories Studio",
    address: "321 Calmette, Q1, TP.HCM",
    rating: 4.9,
    priceRange: "250k - 600k",
    image: "https://picsum.photos/300/200?random=34",
    features: "Concept luxury, Album cao cấp"
  },
  {
    id: "5",
    name: "Sweet Moment Photo",
    address: "654 Pasteur, Q1, TP.HCM",
    rating: 4.5,
    priceRange: "120k - 350k",
    image: "https://picsum.photos/300/200?random=35",
    features: "Style couple cute, Props đa dạng"
  }
];

export const restaurants: Restaurant[] = [
  {
    id: "1",
    name: "Pezzi - The Pizza Company",
    address: "159 Hai Bà Trưng, Q1, TP.HCM",
    rating: 4.6,
    priceRange: "200k - 500k",
    image: "https://picsum.photos/300/200?random=41",
    cuisine: "Pizza Ý"
  },
  {
    id: "2",
    name: "Gogi House",
    address: "246 Nguyễn Thị Minh Khai, Q3, TP.HCM",
    rating: 4.4,
    priceRange: "300k - 700k",
    image: "https://picsum.photos/300/200?random=42",
    cuisine: "BBQ Hàn Quốc"
  },
  {
    id: "3",
    name: "Hotpot Story",
    address: "789 Cách Mạng Tháng 8, Q3, TP.HCM",
    rating: 4.5,
    priceRange: "250k - 600k",
    image: "https://picsum.photos/300/200?random=43",
    cuisine: "Lẩu"
  }
];
