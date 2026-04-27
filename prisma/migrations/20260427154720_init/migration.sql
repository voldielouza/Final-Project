-- CreateEnum
CREATE TYPE "Role" AS ENUM ('CLIENT', 'ADMIN', 'EMPLOYEE');

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

-- CreateTable
CREATE TABLE "_RouteToTruck" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_RouteToTruck_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "orders_truckID_key" ON "orders"("truckID");

-- CreateIndex
CREATE UNIQUE INDEX "trucks_userID_key" ON "trucks"("userID");

-- CreateIndex
CREATE INDEX "_RouteToTruck_B_index" ON "_RouteToTruck"("B");

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
