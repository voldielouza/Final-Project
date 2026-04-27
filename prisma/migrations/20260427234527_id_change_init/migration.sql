/*
  Warnings:

  - You are about to drop the column `truckID` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `userID` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `userID` on the `trucks` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[truckId]` on the table `orders` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `trucks` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `truckId` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `trucks` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_truckID_fkey";

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_userID_fkey";

-- DropForeignKey
ALTER TABLE "trucks" DROP CONSTRAINT "trucks_userID_fkey";

-- DropIndex
DROP INDEX "orders_truckID_key";

-- DropIndex
DROP INDEX "trucks_userID_key";

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "truckID",
DROP COLUMN "userID",
ADD COLUMN     "truckId" INTEGER NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "trucks" DROP COLUMN "userID",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "orders_truckId_key" ON "orders"("truckId");

-- CreateIndex
CREATE UNIQUE INDEX "trucks_userId_key" ON "trucks"("userId");

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_truckId_fkey" FOREIGN KEY ("truckId") REFERENCES "trucks"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trucks" ADD CONSTRAINT "trucks_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
