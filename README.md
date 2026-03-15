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
- **Database**: SQLite (local)
- **ORM**: Prisma
- **Deployment**: Vercel, VPS, hoặc bất kỳ server nào
- **Icons**: Lucide React
- **Data Fetching**: SWR

## 🚀 Deploy lên Server (100% MIỄN PHÍ)

### Bước 1: Chuẩn bị mã nguồn
```bash
git clone <your-repo-url>
cd schedule-builder
npm install
```

### Bước 2: Cấu hình môi trường
```bash
cp .env.example .env
```

File `.env` sẽ chứa:
```env
DATABASE_URL="file:./prisma/dev.db"
```

### Bước 3: Khởi tạo Database
```bash
npx prisma migrate dev --name init
npx prisma generate
```

### Bước 4: Chạy ứng dụng
```bash
npm run dev
```

Truy cập http://localhost:3000

### Bước 5: Deploy lên Server (VPS/DigitalOcean/etc.)
```bash
# Build cho production
npm run build
npm start
```

**Xong!** 🎉 Ứng dụng của bạn sẽ chạy với database SQLite local.

## 💻 Chạy Local Development

### 1. Clone & cài đặt
```bash
git clone <your-repo-url>
cd schedule-builder
npm install
```

### 2. Cấu hình môi trường
```bash
cp .env.example .env
```

File `.env` sẽ chứa:
```env
DATABASE_URL="file:./prisma/dev.db"
```

### 3. Khởi tạo Database
```bash
npx prisma migrate dev --name init
npx prisma generate
```

### 4. Chạy development server
```bash
npm run dev
```

Truy cập http://localhost:3000

Mở [http://localhost:3000](http://localhost:3000) để xem ứng dụng.

## 🌐 Deploy lên Các Nền Tảng Khác

### Deploy lên Vercel (Tùy chọn)
1. Push code lên GitHub/GitLab
2. Truy cập [vercel.com](https://vercel.com) → **New Project**
3. Import repository → Deploy
4. Vercel sẽ tự động nhận dạng Next.js và deploy

### Deploy lên VPS/DigitalOcean/AWS
```bash
# Trên server của bạn
git clone <your-repo-url>
cd schedule-builder
npm install
cp .env.example .env
# Chỉnh sửa .env với DATABASE_URL
npx prisma migrate deploy
npm run build
npm start
```

### Deploy với Docker (dựa trên Dockerfile hiện tại)

`Dockerfile` trong project là multi-stage build và chạy Next.js ở chế độ standalone (`node server.js`).

1. Build Docker image:

```bash
docker build --progress=plain -t schedule-builder .
```

2. Chạy container (foreground, đơn giản nhất):

```bash
docker run -p 3000:3000 schedule-builder:latest
```

3. Chạy container với biến môi trường từ `.env` (khuyến nghị khi dùng Prisma):

```bash
docker run -d --name schedule-builder -p 3000:3000 --env-file .env schedule-builder:latest
```

4. Truy cập ứng dụng tại `http://localhost:3000`.

Các lệnh hữu ích:

```bash
# Xem logs
docker logs -f schedule-builder

# Dừng và xóa container
docker stop schedule-builder
docker rm schedule-builder

# Build lại image sau khi đổi code
docker build --no-cache --progress=plain -t schedule-builder .
```

Nếu bạn chưa có file `.env`, có thể truyền trực tiếp `DATABASE_URL`:

```bash
docker run -d --name schedule-builder -p 3000:3000 \
  -e DATABASE_URL="file:./dev.db" \
  schedule-builder:latest
```

Để giữ dữ liệu SQLite sau khi xóa container, mount volume:

```bash
mkdir -p docker-data
docker run -d --name schedule-builder -p 3000:3000 \
  -e DATABASE_URL="file:./data/dev.db" \
  -v "$(pwd)/docker-data:/app/data" \
  schedule-builder:latest
```

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
    └── db.ts               # Kết nối Database (Prisma)
prisma/
└── schema.prisma           # Database schema
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

### Cập nhật Database Schema
Khi thay đổi `prisma/schema.prisma`:
```bash
npx prisma migrate dev --name your-migration-name
npx prisma generate
```

## API Endpoints

- `GET /api/schedule` - Lấy danh sách tất cả lịch trình
- `POST /api/schedule` - Lưu lịch trình mới
- `DELETE /api/schedule/clear` - Xóa tất cả lịch trình
- `GET /api/custom-venues?type=lunch` - Lấy custom venues theo loại

## Quản lý Database SQLite

### Backup dữ liệu
```bash
# File database nằm tại: prisma/dev.db
cp prisma/dev.db backup-$(date +%Y%m%d).db
```

### Reset database
```bash
npx prisma migrate reset
```

### Xem dữ liệu
```bash
npx prisma studio
```
Truy cập http://localhost:5555 để xem database qua web interface.

## Troubleshooting

### Lỗi "Database file is locked"
```bash
# Dừng app trước
pkill -f "npm run dev"
# Hoặc xóa file lock
rm prisma/dev.db-journal
```

### Reset database hoàn toàn
```bash
npx prisma migrate reset --force
npx prisma migrate dev --name init
```

### Migration không hoạt động
```bash
# Xóa và tạo lại
rm -rf prisma/migrations
npx prisma migrate dev --name init
```

## Giới hạn & Tính năng

- **SQLite**: Unlimited storage, miễn phí hoàn toàn
- **Vercel**: 100GB băng thông, unlimited requests (nếu deploy lên Vercel)
- **VPS**: Tùy thuộc vào cấu hình server của bạn

Đủ cho hàng nghìn người dùng thực tế với database local.

## Contributing

1. Fork repository
2. Tạo feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push branch: `git push origin feature/amazing-feature`
5. Tạo Pull Request

## License

MIT License - xem file [LICENSE](LICENSE) chi tiết.
