export interface Cafe {
  id: string;
  name: string;
  address: string;
  image: string;
  tiktokUrl: string;
}

export interface Restaurant {
  id: string;
  name: string;
  address: string;
  image: string;
  tiktokUrl: string;
}

export interface LunchPlace {
  id: string;
  name: string;
  address: string;
  image: string;
  tiktokUrl: string;
}

export interface Photobooth {
  id: string;
  name: string;
  address: string;
  image: string;
  tiktokUrl: string;
}

export const cafes: Cafe[] = [
  {
    id: "1",
    name: "Ơn giời Tahu ngon đây rồi",
    address: "378 P. Khâm Thiên, Thổ Quan, Đống Đa, Hà Nội",
    image: "https://lh3.googleusercontent.com/p/AF1QipMoQB6fhQEBtlNzEZWr2dNbRnoHx3S263R-jVp7=s1360-w1360-h1020",
    tiktokUrl: "https://www.tiktok.com/@cundaily216/video/7485965642328444178?is_from_webapp=1&sender_device=pc&web_id=7498191363931063815"
  },
  {
    id: "2", 
    name: "Cake Cà Kê",
    address: "17 P. Quán Thánh, Quán Thánh, Ba Đình, Hà Nội",
    image: "https://mms.img.susercontent.com/vn-11134513-7r98o-lw2k1ko0zb2xe4@resize_ss1242x600!@crop_w1242_h600_cT",
    tiktokUrl: "https://www.tiktok.com/@lontodagi/video/7518386770145250567?is_from_webapp=1&sender_device=pc&web_id=7498191363931063815"
  },
  {
    id: "3",
    name: "Le Petit Café",
    address: "289 P. Kim Mã, Khu tập thể Giảng Võ, Ba Đình, Hà Nội", 
    image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nr00vgiPBqT7Xn1hiUhD_1-Oiw1K0EJyGdYv4BN6w0sK6MRCYMZAyey8rTmQ4McAPVaf6GTfU0DbL8OtlZ4MI82usuTy4FSnEEmCtJD9uREx-CJLMBaiYpv9RgZZm4TAvlUCGo=s1360-w1360-h1020",
    tiktokUrl: "https://www.tiktok.com/@hanoilifeyay/video/7528625394841308423?is_from_webapp=1&sender_device=pc&web_id=7498191363931063815"
  },
];

// Quán ăn trưa lãng mạn cho hẹn hò
export const lunchPlaces: LunchPlace[] = [
  {
    id: "1",
    name: "Quán Cơm Tấm Sài Gòn",
    address: "246 Bùi Viện, Q1, TP.HCM",
    image: "https://picsum.photos/300/200?random=21",
    tiktokUrl: "https://www.tiktok.com/@comtamsaigon"
  },
  {
    id: "2",
    name: "Phở Hòa Pasteur",
    address: "421A Pasteur, Q3, TP.HCM",
    image: "https://picsum.photos/300/200?random=22",
    tiktokUrl: "https://www.tiktok.com/@phohoapasteur"
  },
  {
    id: "3",
    name: "Bún Bò Huế Cô Ba",
    address: "159 Pasteur, Q1, TP.HCM",
    image: "https://picsum.photos/300/200?random=23",
    tiktokUrl: "https://www.tiktok.com/@bunbohuecoba"
  },
  {
    id: "4",
    name: "Lotteria",
    address: "135 Nguyễn Thái Học, Q1, TP.HCM",
    image: "https://picsum.photos/300/200?random=24",
    tiktokUrl: "https://www.tiktok.com/@lotteria"
  },
  {
    id: "5",
    name: "Pizza Hut",
    address: "987 Trần Hưng Đạo, Q5, TP.HCM",
    image: "https://picsum.photos/300/200?random=25",
    tiktokUrl: "https://www.tiktok.com/@pizzahut"
  }
];

// Photobooth cho những kỷ niệm đẹp
export const photobooths: Photobooth[] = [
  {
    id: "1",
    name: "Heekcaa Studio",
    address: "123 Nguyễn Đình Chiểu, Q3, TP.HCM",
    image: "https://picsum.photos/300/200?random=31",
    tiktokUrl: "https://www.tiktok.com/@heekcaastudio"
  },
  {
    id: "2",
    name: "Oneshot Studio",
    address: "456 Võ Văn Tần, Q3, TP.HCM",
    image: "https://picsum.photos/300/200?random=32",
    tiktokUrl: "https://www.tiktok.com/@oneshotstudio"
  },
  {
    id: "3",
    name: "Photo Corner",
    address: "789 Lê Văn Sỹ, Q3, TP.HCM",
    image: "https://picsum.photos/300/200?random=33",
    tiktokUrl: "https://www.tiktok.com/@photocorner"
  },
  {
    id: "4",
    name: "Memories Studio",
    address: "321 Calmette, Q1, TP.HCM",
    image: "https://picsum.photos/300/200?random=34",
    tiktokUrl: "https://www.tiktok.com/@memoriesstudio"
  },
  {
    id: "5",
    name: "Sweet Moment Photo",
    address: "654 Pasteur, Q1, TP.HCM",
    image: "https://picsum.photos/300/200?random=35",
    tiktokUrl: "https://www.tiktok.com/@sweetmomentphoto"
  }
];

export const restaurants: Restaurant[] = [
  {
    id: "1",
    name: "Pezzi - The Pizza Company",
    address: "159 Hai Bà Trưng, Q1, TP.HCM",
    image: "https://picsum.photos/300/200?random=41",
    tiktokUrl: "https://www.tiktok.com/@pezzirestaurant"
  },
  {
    id: "2",
    name: "Gogi House",
    address: "246 Nguyễn Thị Minh Khai, Q3, TP.HCM",
    image: "https://picsum.photos/300/200?random=42",
    tiktokUrl: "https://www.tiktok.com/@gogihouse"
  },
  {
    id: "3",
    name: "Hotpot Story",
    address: "789 Cách Mạng Tháng 8, Q3, TP.HCM",
    image: "https://picsum.photos/300/200?random=43",
    tiktokUrl: "https://www.tiktok.com/@hotpotstory"
  }
];

// Default selections cho lịch trình
export const defaultSelections = {
  lunch: lunchPlaces.find(place => place.id === "2"), // Phở Hòa Pasteur
  cafe: cafes.find(cafe => cafe.id === "1"), // The Coffee House
  photobooth: photobooths.find(booth => booth.id === "1") // Heekcaa Studio
};
