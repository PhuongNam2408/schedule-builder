# 🎯 HƯỚNG DẪN TRIỂN KHAI SCHEDULE BUILDER

## 📋 Tổng quan
Schedule Builder là ứng dụng web để tạo lịch trình thăm quán cà phê và nhà hàng. Ứng dụng:
- ✅ Không yêu cầu đăng nhập người dùng
- ✅ Lưu trữ tất cả lịch trình để mọi người xem
- ✅ Hoàn toàn MIỄN PHÍ với SQLite (local database)
- ✅ Dễ deploy lên Vercel, VPS, hoặc bất kỳ server nào

---

## 🚀 BƯỚC 1: SETUP LOCAL TRƯỚC

### 1.1 Chuẩn bị môi trường
```bash
git clone <your-repo-url>
cd schedule-builder
npm install
```

### 1.2 Cấu hình Database
```bash
cp .env.example .env
# File .env sẽ chứa: DATABASE_URL="file:./prisma/dev.db"
```

### 1.3 Khởi tạo Database SQLite
```bash
npx prisma migrate dev --name init
```

### 1.4 Chạy development server
```bash
npm run dev
```

Truy cập http://localhost:3000 để test ứng dụng.

---

## � BƯỚC 2: DEPLOY LÊN VERCEL

### 2.1 Upload code lên GitHub

**Bước 1**: Tạo repository trên GitHub
1. Truy cập [github.com](https://github.com) và đăng nhập
2. Bấm **"New repository"** 
3. Tên repository: `schedule-builder`
4. Để **Public** (hoặc Private nếu muốn)
5. Bấm **"Create repository"**

**Bước 2**: Push code lên GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/schedule-builder.git
git push -u origin main
```

### 2.2 Deploy trên Vercel
1. **Truy cập [vercel.com/dashboard](https://vercel.com/dashboard)**
2. **Đăng nhập** bằng GitHub
3. **Bấm "New Project"**
4. **Import** repository từ GitHub
5. **Framework Preset**: Next.js (tự động nhận dạng)
6. **Environment Variables**: Thêm `DATABASE_URL="file:./prisma/dev.db"`
7. **Bấm "Deploy"**

✅ Sau 2-3 phút, bạn sẽ có URL dạng: `https://schedule-builder-xyz.vercel.app`

---

## 🚀 BƯỚC 3: DEPLOY LÊN VPS/DIGITALOCEAN

### 3.1 Chuẩn bị
- VPS với Node.js 18+ và npm
- SSH access vào server
- Domain (tùy chọn)

### 3.2 Upload code
```bash
# Từ máy local
scp -r . username@your-server.com:/home/username/schedule-builder

# Hoặc dùng Git
ssh username@your-server.com
git clone https://github.com/your-username/schedule-builder.git
cd schedule-builder
```

### 3.3 Setup trên server
```bash
npm install
cp .env.example .env
# Chỉnh sửa .env với DATABASE_URL nếu cần

npx prisma migrate deploy
npm run build
```

### 3.4 Chạy ứng dụng
```bash
# Dùng PM2 (khuyến nghị)
npm install -g pm2
pm2 start "npm start" --name "schedule-builder"
pm2 startup
pm2 save

# Hoặc dùng systemd service
```

### 3.5 Gắn domain (tùy chọn)
```bash
# Dùng Nginx
sudo nano /etc/nginx/sites-available/schedule-builder

# Thêm:
server {
    listen 80;
    server_name yourdomain.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
    }
}

# Enable site
sudo ln -s /etc/nginx/sites-available/schedule-builder /etc/nginx/sites-enabled/
sudo systemctl restart nginx
```

---

## 🔧 BACKUP DỮ LIỆU

### Backup SQLite Database
```bash
# Backup file dev.db
cp prisma/dev.db backup-$(date +%Y%m%d-%H%M%S).db

# Restore từ backup
cp backup-20260308-120000.db prisma/dev.db
npm run dev  # Restart app
```

---

## 📝 CHỈNH SỬA DỮ LIỆU

### Thêm quán cà phê/nhà hàng
Chỉnh sửa file `src/data/venues.ts`:

```typescript
export const cafes: Cafe[] = [
  {
    id: "new-cafe",
    name: "Quán Cà Phê Mới", 
    address: "123 Đường ABC, Quận XYZ",
    image: "https://picsum.photos/300/200?random=123",
    tiktokUrl: "https://tiktok.com/@..."
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

### Lỗi "Database file is locked"
```bash
# Đóng tất cả process Node
pkill -f "npm"
# Xóa lock file
rm prisma/dev.db-journal
npm run dev
```

### Reset database hoàn toàn
```bash
npx prisma migrate reset --force
npx prisma migrate dev --name init
```

### Migration có lỗi
```bash
# Xóa migrations cũ
rm -rf prisma/migrations
npx prisma migrate dev --name init
```

---

---

## 📞 LIÊN HỆ

Nếu cần hỗ trợ, hãy tạo **issue** trên GitHub repository hoặc liên hệ trực tiếp.

**Chúc bạn deploy thành công! 🎉**
