-- CreateTable
CREATE TABLE "Schedule" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lunchId" TEXT NOT NULL,
    "lunchName" TEXT NOT NULL,
    "lunchAddress" TEXT NOT NULL,
    "lunchImage" TEXT,
    "lunchTiktok" TEXT,
    "cafeId" TEXT NOT NULL,
    "cafeName" TEXT NOT NULL,
    "cafeAddress" TEXT NOT NULL,
    "cafeImage" TEXT,
    "cafeTiktok" TEXT,
    "photoboothId" TEXT NOT NULL,
    "photoboothName" TEXT NOT NULL,
    "photoboothAddress" TEXT NOT NULL,
    "photoboothImage" TEXT,
    "photoboothTiktok" TEXT,
    "restaurantId" TEXT NOT NULL,
    "restaurantName" TEXT NOT NULL,
    "restaurantAddress" TEXT NOT NULL,
    "restaurantImage" TEXT,
    "restaurantTiktok" TEXT
);

-- CreateTable
CREATE TABLE "CustomVenue" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE INDEX "Schedule_createdAt_idx" ON "Schedule"("createdAt");

-- CreateIndex
CREATE INDEX "Schedule_date_idx" ON "Schedule"("date");

-- CreateIndex
CREATE INDEX "CustomVenue_type_idx" ON "CustomVenue"("type");

-- CreateIndex
CREATE INDEX "CustomVenue_createdAt_idx" ON "CustomVenue"("createdAt");
