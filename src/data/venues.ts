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
    name: "MONO Coffee Lab - Pasteur",
    address: "3 P. Nguyễn Huy Tự, Bạch Đằng, Hai Bà Trưng, Hà Nội",
    image: "https://imagevietnam.vnanet.vn//MediaUpload/Org/2024/08/20/120-15-49-50.jpg",
    tiktokUrl: "https://www.tiktok.com/@lthivanh/video/7343239074590838024?q=mono%20coffee%20lab&t=1753640229495"
  },
  {
    id: "2", 
    name: "Cheese Coffee",
    address: "50A P. Lê Đại Hành, Lê Đại Hành, Hai Bà Trưng, Hà Nội",
    image: "https://attachment.momocdn.net/common/u/2e02fb5fe4f64fb55bc713540643c6f8eae702d101cea8c59afc49cfc505fc37/2d143af0-5691-47a2-8088-a877bf3ca8b1zlx3acn7.jpeg",
    tiktokUrl: "https://www.tiktok.com/@xu.nxaa/video/7252711550941678853?q=cheese%20coffee%20l%C3%AA%20%C4%91%E1%BA%A1i%20h%C3%A0nh&t=1753641117503"
  },
  {
    id: "3",
    name: "Le Petit Café",
    address: "289 P. Kim Mã, Khu tập thể Giảng Võ, Ba Đình, Hà Nội", 
    image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nr00vgiPBqT7Xn1hiUhD_1-Oiw1K0EJyGdYv4BN6w0sK6MRCYMZAyey8rTmQ4McAPVaf6GTfU0DbL8OtlZ4MI82usuTy4FSnEEmCtJD9uREx-CJLMBaiYpv9RgZZm4TAvlUCGo=s1360-w1360-h1020",
    tiktokUrl: "https://www.tiktok.com/@hanoilifeyay/video/7528625394841308423?is_from_webapp=1&sender_device=pc&web_id=7498191363931063815"
  },
  {
    id: "4",
    name: "All Day Coffee",
    address: "37 P. Quang Trung, Trần Hưng Đạo, Hoàn Kiếm, Hà Nộii", 
    image: "https://lh3.googleusercontent.com/p/AF1QipNldj2frXRYpRDS-_YURCUMX7jjZbdmKi6K6W8W=w408-h258-k-no",
    tiktokUrl: "https://www.tiktok.com/@elss.2002/video/7299065905785376007?q=allday&t=1753641231873"
  },
  {
    id: "5",
    name: "Indoor Coffee & Bistro",
    address: "ngách 53 Ng. 252 P. Tây Sơn, Trung Liệt, Đống Đa, Hà Nội", 
    image: "https://ipos.vn/wp-content/uploads/2023/03/Group-10-2-2.png",
    tiktokUrl: "https://www.tiktok.com/@chillinhanoi/video/7202962692892904730?q=qu%C3%A1n%20cafe%20kh%C3%B4ng%20gian%20r%E1%BB%99ng%20h%C3%A0%20n%E1%BB%99i&t=1753641472936"
  },
];

// Quán ăn trưa lãng mạn cho hẹn hò
export const lunchPlaces: LunchPlace[] = [
  {
    id: "1",
    name: "Bánh cuốn Cao Bằng",
    address: "29 Ng. 154 Đ. Ngọc Lâm, Ngọc Lâm, Long Biên, Hà Nội",
    image: "https://lh3.googleusercontent.com/p/AF1QipM8JTVe-EXxW1iBCkG8c55GsW4uYzAvkenTys6J=s1360-w1360-h1020",
    tiktokUrl: ""
  },
  {
    id: "2",
    name: "Bún Riêu Cua Hà",
    address: "120 P. Ái Mộ, Bồ Đề, Long Biên, Hà Nội",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqrAYEvb_-q8hcxE4r0XGXgz9lE59rkXuwA5ZqICxJtQDMG9TSshCjQXiauFyH-NlRZLYsfZU7QIHDvbNqnCtVPcBn8sJIh-zVUAp5UFEoREdpjJ4YHaxWKjigNvLQZovu0xonP=s1360-w1360-h10202",
    tiktokUrl: ""
  },
  {
    id: "3",
    name: "Mỳ Tâm - Mỳ hải sản chua cay",
    address: "97 P. Long Biên 1, Ngọc Lâm, Long Biên, Hà Nội",
    image: "https://lh3.googleusercontent.com/p/AF1QipNMQ-KpTnyRvHTwKb9OJB34iC3JbDI5YQ9R3-rO=s1360-w1360-h1020",
    tiktokUrl: ""
  },
  {
    id: "4",
    name: "Quán Bún Thủy",
    address: "98 Đ. Trần Nhật Duật, Hàng Buồm, Hoàn Kiếm, Hà Nội",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrPCYdu5ZyHSUSe_vqElD6RiyYc2L8q21Cx1X2YW9LQ0F7Jy3XRrT8QyJutS-CG7TAUn0xMpEgGkScoBMQVYWpvQDS9HodA6quubil35K0UZ5MTNYjN8Dlo4lJnGjbDl7IZcvY5_MPUesTh=s1360-w1360-h1020",
    tiktokUrl: ""
  },
  {
    id: "5",
    name: "Bún Chả Hoa - Ngọc Lâm",
    address: "70 Ng. 154 Đ. Ngọc Lâm, Ngọc Lâm, Long Biên, Hà Nội",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqdUBUqDIhucaeGK6Cq-cuaR2gxQS_fcvjA3UfPzsOR0euuENVc8tyuxihrFQGILw5ERIQgcIexh3MGQqkMrZcq4zMUsWu4RhhE0_Z6D2nwKRftkY3RaiFY0foqVksPWHASJLoHsw=s1360-w1360-h1020",
    tiktokUrl: ""
  },
  {
    id: "6",
    name: "Vịt quay Hoàng Tiến (Phở/Xôi)",
    address: "58 Ng. 154 Đ. Ngọc Lâm, Ngọc Lâm, Long Biên, Hà Nội",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nq56dtA52F71fnZyEq8Bzrd5kdEMVowCj7YKunMGCr-Acp3eb_CFj64gfCrslWIHmGgMiWLXUwqimOpJoUHdWBRwKJGBWg6YPrVbtDPlSPMrPDVGWe-DugG8QJ0Cz88vKqnsKdy7FHutmbj=s1360-w1360-h1020",
    tiktokUrl: ""
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
    image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrdRyoBNESuTbdekuLwmyykJ3JmnkabNBZ_Nr8keCat-jrojShLY1nsZAW-8JcgEgMEkrhNqwrQo9BseJzFDScSpIwNC8s3Vm9JHktSooykssuUBgZRDFJWguZ33gRB-9oCB31F=s1360-w1360-h1020",
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
    image: "/glame_photobooth_image.png",
    tiktokUrl: ""
  },
  {
    id: "6",
    name: "Wednesday Studio",
    address: "Tầng 2, 168 Thái Hà, Đống Đa, Hà Nội",
    image: "/wednesday_studio_image.png",
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
  lunch: lunchPlaces.find(place => place.id === "1"), // Bánh cuốn Cao Bằng
  cafe: cafes.find(cafe => cafe.id === "3"), // Le Petit Cafe
  photobooth: photobooths.find(booth => booth.id === "3") // Photo Palatte
};
