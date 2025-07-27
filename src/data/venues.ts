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
    name: "Mothaiba - Hoàn Kiếm",
    address: "63 Mã Mây, Hàng Buồm, Hoàn Kiếm, Hà Nội",
    image: "https://scontent.fhan9-1.fna.fbcdn.net/v/t39.30808-6/481913129_582003208163496_330418020139268004_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Wg3hwF0zbl8Q7kNvwF4nbJr&_nc_oc=Adkz4UPoV3eGuAaVWz7ff7IEWXDYygbRy0493OlhqNRCWXBIcTIC6IvB_ptqcn8rUoN6fkqdhtYiESfcVIQDgbD5&_nc_zt=23&_nc_ht=scontent.fhan9-1.fna&_nc_gid=0c3KI9JHH2sQjKd6HyHXMQ&oh=00_AfQd5bM-Dg914y4biQLYav_7T1pHEwMYZu4VPr8KdSQzKg&oe=688BFED4",
    tiktokUrl: "https://www.tiktok.com/@ujunhs_/video/7392633189237312786?is_from_webapp=1&sender_device=pc&web_id=7498191363931063815o"
  },
  {
    id: "2",
    name: "Linh Linh Photo Booth",
    address: "23 P. Hàng Khay, Tràng Tiền, Hoàn Kiếm, Hà Nội",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3E_cIm2vfKkQpgpSTKGcxsyac34Rpl6dJ5A&s",
    tiktokUrl: "https://www.tiktok.com/@linhlinh.photobooth/video/7473743193322835208"
  },
  {
    id: "3",
    name: "Photo Palette - Hoàn Kiếm",
    address: "8 P. Nhà Chung, Hàng Trống, Hoàn Kiếm, Hà Nội",
    image: "https://picsum.photos/300/200?random=33",
    tiktokUrl: "https://www.tiktok.com/@photopalette_vn/video/7242180748130782469?q=photo%20palate%20ho%C3%A0n%20ki%E1%BA%BFm&t=1753624014968"
  },
  {
    id: "4",
    name: "Photoism",
    address: "976 Đ. Láng, Láng Thượng, Đống Đa, Hà Nội",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npQ9WPeKPAaul1yEcQVlNc6c9mLCcD3kgMBPhx6jV3pcYTzl1MAtuqaeOGJxyWXg4NQJsFLHORbYGxbvcOIjp60hXbxZN8YH_krA2uVHtl0f2zNDkOdyHxV2H14aPbXmd9fbCAnUaQokAWR=s1360-w1360-h1020",
    tiktokUrl: "https://www.tiktok.com/@soojicandy/video/7357722228592626962?is_from_webapp=1&sender_device=pc&web_id=7498191363931063815o"
  },
  {
    id: "5",
    name: "Glame Photobooth",
    address: "10 Ng. 18 P. Võ Văn Dũng, Chợ Dừa, Đống Đa, Hà Nội",
    image: "https://www.instagram.com/p/DKri1ctSwFE/?img_index=5",
    tiktokUrl: ""
  },
  {
    id: "6",
    name: "Wednesday Studio",
    address: "Tầng 2, 168 Thái Hà, Đống Đa, Hà Nội",
    image: "https://www.instagram.com/p/DItyqIYT78o/?img_index=1",
    tiktokUrl: "https://www.tiktok.com/@tungchiday/video/7483080435292065031?is_from_webapp=1&sender_device=pc&web_id=7498191363931063815"
  },
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
  cafe: cafes.find(cafe => cafe.id === "1"), // Ơn giời Tahu ngon đây rồi
  photobooth: photobooths.find(booth => booth.id === "1") // Mothaiba - Hoàn Kiếm
};
