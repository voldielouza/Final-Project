/*
  Warnings:

  - You are about to drop the `Order` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Route` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Truck` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_truckID_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_userID_fkey";

-- DropForeignKey
ALTER TABLE "Truck" DROP CONSTRAINT "Truck_userID_fkey";

-- DropForeignKey
ALTER TABLE "_RouteToTruck" DROP CONSTRAINT "_RouteToTruck_A_fkey";

-- DropForeignKey
ALTER TABLE "_RouteToTruck" DROP CONSTRAINT "_RouteToTruck_B_fkey";

-- DropTable
DROP TABLE "Order";

-- DropTable
DROP TABLE "Route";

-- DropTable
DROP TABLE "Truck";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'CLIENT',
    "address" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "shippingAddress" TEXT NOT NULL,
    "userID" INTEGER NOT NULL,
    "truckID" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "trucks" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "licenseNumber" TEXT NOT NULL,
    "userID" INTEGER NOT NULL,

    CONSTRAINT "trucks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "routes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "userID" INTEGER NOT NULL,

    CONSTRAINT "routes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "orders_userID_key" ON "orders"("userID");

-- CreateIndex
CREATE UNIQUE INDEX "orders_truckID_key" ON "orders"("truckID");

-- CreateIndex
CREATE UNIQUE INDEX "trucks_userID_key" ON "trucks"("userID");

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_truckID_fkey" FOREIGN KEY ("truckID") REFERENCES "trucks"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trucks" ADD CONSTRAINT "trucks_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RouteToTruck" ADD CONSTRAINT "_RouteToTruck_A_fkey" FOREIGN KEY ("A") REFERENCES "routes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RouteToTruck" ADD CONSTRAINT "_RouteToTruck_B_fkey" FOREIGN KEY ("B") REFERENCES "trucks"("id") ON DELETE CASCADE ON UPDATE CASCADE;
