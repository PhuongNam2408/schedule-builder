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

export const restaurants: Restaurant[] = [
  {
    id: "1",
    name: "Quán Cơm Tấm Sài Gòn",
    address: "246 Bùi Viện, Q1, TP.HCM",
    rating: 4.7,
    priceRange: "50k - 120k",
    image: "https://picsum.photos/300/200?random=6",
    cuisine: "Việt Nam"
  },
  {
    id: "2",
    name: "Lotteria",
    address: "135 Nguyễn Thái Học, Q1, TP.HCM", 
    rating: 4.1,
    priceRange: "80k - 200k",
    image: "https://picsum.photos/300/200?random=7",
    cuisine: "Fast Food"
  },
  {
    id: "3",
    name: "Phở Hòa Pasteur",
    address: "421A Pasteur, Q3, TP.HCM",
    rating: 4.8,
    priceRange: "60k - 100k",
    image: "https://picsum.photos/300/200?random=8",
    cuisine: "Việt Nam"
  },
  {
    id: "4", 
    name: "KFC",
    address: "678 Cách Mạng Tháng 8, Q3, TP.HCM",
    rating: 4.0,
    priceRange: "100k - 250k",
    image: "https://picsum.photos/300/200?random=9",
    cuisine: "Fast Food"
  },
  {
    id: "5",
    name: "Bún Bò Huế Cô Ba",
    address: "159 Pasteur, Q1, TP.HCM",
    rating: 4.9,
    priceRange: "40k - 80k", 
    image: "https://picsum.photos/300/200?random=10",
    cuisine: "Việt Nam"
  },
  {
    id: "6",
    name: "Pizza Hut",
    address: "987 Trần Hưng Đạo, Q5, TP.HCM",
    rating: 4.2,
    priceRange: "150k - 400k",
    image: "https://picsum.photos/300/200?random=11",
    cuisine: "Tây"
  }
];
