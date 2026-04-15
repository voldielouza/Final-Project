-- CreateEnum
CREATE TYPE "Role" AS ENUM ('CLIENT', 'ADMIN', 'EMPLOYEE');

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "shippingAddress" TEXT NOT NULL,
    "userID" INTEGER NOT NULL,
    "truckID" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Order_userID_key" ON "Order"("userID");

-- CreateIndex
CREATE UNIQUE INDEX "Order_truckID_key" ON "Order"("truckID");
