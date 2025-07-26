# 🎯 HƯỚNG DẪN TRIỂN KHAI SCHEDULE BUILDER

## 📋 Tổng quan
Schedule Builder là ứng dụng web để tạo lịch trình thăm quán cà phê và nhà hàng. Ứng dụng:
- ✅ Không yêu cầu đăng nhập người dùng
- ✅ Lưu trữ tất cả lịch trình để mọi người xem
- ✅ Hoàn toàn MIỄN PHÍ với Vercel + Upstash Redis

---

## 🚀 BƯỚC 1: DEPLOY LÊN VERCEL

### 1.1 Chuẩn bị
- Tài khoản GitHub (để lưu code)
- Tài khoản Vercel (miễn phí tại [vercel.com](https://vercel.com))

### 1.2 Upload code lên GitHub

**Bước 1**: Tạo repository trên GitHub
1. Truy cập [github.com](https://github.com) và đăng nhập
2. Bấm **"New repository"** 
3. Tên repository: `schedule-builder`
4. Để **Public** (hoặc Private nếu muốn)
5. **KHÔNG** tick "Add a README file"
6. Bấm **"Create repository"**

**Bước 2**: Push code lên GitHub
```bash
# Nếu chưa có Git repo
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/phuongnam2408/schedule-builder.git
git push -u origin main
```

### 1.3 Deploy trên Vercel
1. **Truy cập [vercel.com/dashboard](https://vercel.com/dashboard)**
2. **Đăng nhập** bằng GitHub
3. **Bấm "New Project"**
4. **Import** repository từ GitHub
5. **Framework Preset**: Next.js (tự động nhận dạng)
6. **Tên project**: `schedule-builder` (hoặc tên khác)
7. **Bấm "Deploy"**

✅ Sau 2-3 phút, bạn sẽ có URL dạng: `https://schedule-builder-xyz.vercel.app`

---

## 🔧 BƯỚC 2: THÊM DATABASE (REDIS)

### 2.1 Cách 1: Sử dụng Upstash từ Vercel Marketplace (Dễ nhất)
1. **Trong Vercel Dashboard** → **Marketplace** 
2. **Tìm "Upstash"** → **"Add Integration"** 
3. **Chọn project** → **"Create database"**
4. Vercel sẽ tự động thêm các biến môi trường:
   ```
   KV_REST_API_URL=https://your-database.upstash.io
   KV_REST_API_TOKEN=your_token_here
   REDIS_URL=rediss://default:token@host:6379
   ```

### 2.2 Cách 2: Sử dụng Redis Cloud
1. **Truy cập [redis.com](https://redis.com)** → **"Try Free"**
2. **Tạo database** miễn phí (30MB)
3. **Copy connection string** dạng: `redis://default:password@host:port`
4. **Trong Vercel Dashboard** → **Settings** → **Environment Variables**
5. **Thêm biến**: `REDIS_URL` = connection string của bạn

### 2.3 Xác nhận biến môi trường
Kiểm tra tại: **Project → Settings → Environment Variables**

Bạn sẽ thấy một trong các bộ biến sau:
- **Upstash KV**: `KV_REST_API_URL` + `KV_REST_API_TOKEN` 
- **Redis Cloud**: `REDIS_URL`

✅ Ứng dụng sẽ tự động redeploy và hoạt động đầy đủ!

---

## 🌐 BƯỚC 3: GẮN TÊN MIỀN RIÊNG (TÙY CHỌN)

### 3.1 Mua tên miền
- **Cloudflare Registrar**: Giá gốc, không phí ẩn
- **Namecheap, GoDaddy**: Có khuyến mãi cho năm đầu

### 3.2 Gắn domain vào Vercel
1. **Project → Settings → Domains**
2. **"Add Domain"** → nhập `yourdomain.com`
3. **Trỏ DNS** theo hướng dẫn:
   - **A record**: `@` → IP của Vercel
   - **CNAME**: `www` → `yourdomain.vercel.app`

✅ Sau 5-15 phút, truy cập `https://yourdomain.com` sẽ thấy ứng dụng!

---

## 📊 GIỚI HẠN MIỄN PHÍ

### Vercel Hobby Plan (Miễn phí)
- ✅ **100GB** băng thông/tháng
- ✅ **Không giới hạn** số project
- ✅ **HTTPS** tự động
- ✅ **Deployment** không giới hạn

### Upstash Redis Free Tier
- ✅ **256MB** storage
- ✅ **500,000** requests/tháng  
- ✅ **1GB** data transfer/tháng

**➡️ Đủ cho 1000+ lịch trình/tháng!**

---

## 🛠️ CHỈNH SỬA DỮ LIỆU

### Thêm quán cà phê/nhà hàng
Chỉnh sửa file `src/data/venues.ts`:

```typescript
export const cafes: Cafe[] = [
  {
    id: "new-cafe",
    name: "Quán Cà Phê Mới", 
    address: "123 Đường ABC, Quận XYZ",
    rating: 4.5,
    priceRange: "50k - 100k",
    image: "https://picsum.photos/300/200?random=123",
    specialty: "Specialty coffee, Bánh ngọt"
  },
  // ... thêm quán khác
];
```

### Push thay đổi
```bash
git add .
git commit -m "Update venues data"
git push
```

Vercel sẽ tự động deploy lại trong 1-2 phút!

---

## 🔧 TROUBLESHOOTING

### Lỗi "Redis connection failed"
- ✅ Kiểm tra biến môi trường trong Vercel
- ✅ Thử tạo lại Upstash Redis database

### Ứng dụng không lưu được lịch trình
- ✅ Check Console (F12) để xem lỗi API
- ✅ Đảm bảo Upstash Redis hoạt động

### Vercel Dashboard không thấy Marketplace
- ✅ Đăng nhập lại Vercel
- ✅ Thử trên trình duyệt khác (Chrome/Firefox)

---

## 📞 LIÊN HỆ

Nếu cần hỗ trợ, hãy tạo **issue** trên GitHub repository hoặc liên hệ trực tiếp.

**Chúc bạn deploy thành công! 🎉**
