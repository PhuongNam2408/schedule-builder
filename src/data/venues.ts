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
    name: "The Coffee House",
    address: "123 Nguyễn Huệ, Q1, TP.HCM",
    image: "https://picsum.photos/300/200?random=1",
    tiktokUrl: "https://www.tiktok.com/@thecoffeehouse"
  },
  {
    id: "2", 
    name: "Highlands Coffee",
    address: "456 Lê Lợi, Q1, TP.HCM",
    image: "https://picsum.photos/300/200?random=2",
    tiktokUrl: "https://www.tiktok.com/@highlandscoffee"
  },
  {
    id: "3",
    name: "Starbucks",
    address: "789 Đồng Khởi, Q1, TP.HCM", 
    image: "https://picsum.photos/300/200?random=3",
    tiktokUrl: "https://www.tiktok.com/@starbucks"
  },
  {
    id: "4",
    name: "Trung Nguyên Coffee",
    address: "321 Pasteur, Q3, TP.HCM",
    image: "https://picsum.photos/300/200?random=4",
    tiktokUrl: "https://www.tiktok.com/@trungnguyencoffee"
  },
  {
    id: "5",
    name: "Phúc Long Coffee & Tea",
    address: "654 Hai Bà Trưng, Q3, TP.HCM",
    image: "https://picsum.photos/300/200?random=5",
    tiktokUrl: "https://www.tiktok.com/@phuclongcoffee"
  }
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
