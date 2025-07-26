# Schedule Builder - Ứng dụng tạo lịch trình quán cafe & nhà hàng

Ứng dụng web giúp bạn tạo lịch trình thăm các quán cafe và nhà hàng, với khả năng lưu trữ và xem lại lịch sử các lịch trình đã tạo.

## ✨ Tính năng

- 🔥 **Giao diện 3 bước đơn giản**: Chọn cafe → Chọn nhà hàng → Xác nhận
- ☕ **Danh sách quán cafe phong phú** với thông tin chi tiết
- 🍽️ **Danh sách nhà hàng đa dạng** theo nhiều loại ẩm thực  
- 💾 **Lưu trữ lịch sử** không cần đăng nhập
- 📱 **Responsive design** cho mọi thiết bị
- ⚡ **Hiệu suất cao** với Next.js 15

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: Upstash Redis (serverless)
- **Deployment**: Vercel (miễn phí)
- **Icons**: Lucide React
- **Data Fetching**: SWR

## 🚀 Deploy lên Vercel + Upstash Redis (100% MIỄN PHÍ)

### Bước 1: Chuẩn bị mã nguồn
```bash
git clone <your-repo-url>
cd schedule-builder
npm install
```

### Bước 2: Deploy lên Vercel
1. Truy cập [vercel.com](https://vercel.com)
2. Đăng nhập bằng GitHub
3. Bấm **"New Project"**
4. Import repository này
5. Framework preset: **Next.js** (tự động nhận dạng)
6. Bấm **"Deploy"**

### Bước 3: Thêm Upstash Redis
1. Trong **Vercel Dashboard** → **Marketplace** 
2. Tìm **"Upstash Redis"** → **"Add Integration"**
3. Chọn project vừa deploy → **"Create database"**
4. Vercel sẽ tự động thêm biến môi trường `UPSTASH_REDIS_REST_URL` và `UPSTASH_REDIS_REST_TOKEN`

### Bước 4: Gắn tên miền (tùy chọn)
1. Trong project → **Settings** → **Domains**
2. **Add** → nhập tên miền của bạn
3. Trỏ DNS theo hướng dẫn

**Xong!** 🎉 Ứng dụng của bạn sẽ chạy tại `https://your-app.vercel.app`

## 💻 Chạy Local Development

### 1. Clone & cài đặt
```bash
git clone <your-repo-url>
cd schedule-builder
npm install
```

### 2. Cấu hình môi trường
```bash
cp .env.local.example .env.local
```

Tạo tài khoản miễn phí tại [Upstash](https://upstash.com), tạo Redis database và điền thông tin vào `.env.local`:
```env
UPSTASH_REDIS_REST_URL=your_redis_url_here
UPSTASH_REDIS_REST_TOKEN=your_redis_token_here
```

### 3. Chạy development server
```bash
npm run dev
```

Truy cập http://localhost:3000

Mở [http://localhost:3000](http://localhost:3000) để xem ứng dụng.

## Deploy lên Vercel (Miễn phí)

### Cách 1: Deploy từ Git (Khuyến nghị)
1. Push code lên GitHub/GitLab
2. Truy cập [vercel.com](https://vercel.com) → **New Project**
3. Import repository → Deploy
4. Thêm Upstash Redis Integration:
   - Vercel Dashboard → **Marketplace** → **Upstash Redis** 
   - **Add Integration** → Chọn project → **Create database**
5. Vercel sẽ tự động thêm biến môi trường và redeploy

### Cách 2: Deploy từ CLI
```bash
npm i -g vercel
vercel --prod
```

## Thêm tên miền riêng

1. Mua domain (khuyến nghị: Cloudflare Registrar)
2. Trong Vercel Dashboard: **Settings** → **Domains** → **Add**
3. Nhập domain → Làm theo hướng dẫn trỏ DNS
4. HTTPS tự động được cấp bởi Vercel

## Cấu trúc thư mục

```
src/
├── app/
│   ├── api/schedule/       # API routes cho lưu/lấy lịch trình
│   ├── history/           # Trang lịch sử
│   └── page.tsx          # Trang chủ
├── components/
│   ├── CafeSelection.tsx     # Component chọn cafe
│   ├── RestaurantSelection.tsx # Component chọn nhà hàng
│   ├── Summary.tsx           # Component xem & xác nhận
│   └── StepIndicator.tsx     # Thanh tiến trình
├── context/
│   └── ScheduleContext.tsx   # State management
├── data/
│   └── venues.ts            # Dữ liệu cafe & nhà hàng
└── lib/
    └── redis.ts            # Kết nối Redis
```

## Tùy chỉnh dữ liệu

Chỉnh sửa file `src/data/venues.ts` để thêm/sửa/xóa quán cafe và nhà hàng:

```typescript
export const cafes: Cafe[] = [
  {
    id: "1",
    name: "Tên quán",
    address: "Địa chỉ",
    rating: 4.5,
    priceRange: "50k - 100k", 
    image: "/path/to/image.jpg",
    specialty: "Đặc sản"
  },
  // ... thêm quán khác
];
```

## API Endpoints

- `GET /api/schedule` - Lấy danh sách tất cả lịch trình
- `POST /api/schedule` - Lưu lịch trình mới

## Giới hạn Free Tier

- **Vercel**: 100GB băng thông, unlimited requests
- **Upstash Redis**: 256MB storage, 500K commands/tháng

Đủ cho hàng nghìn người dùng thực tế.

## Contributing

1. Fork repository
2. Tạo feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push branch: `git push origin feature/amazing-feature`
5. Tạo Pull Request

## License

MIT License - xem file [LICENSE](LICENSE) chi tiết.
