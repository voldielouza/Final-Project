/*
  Warnings:

  - A unique constraint covering the columns `[userID]` on the table `Truck` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "_RouteToTruck" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_RouteToTruck_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_RouteToTruck_B_index" ON "_RouteToTruck"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Truck_userID_key" ON "Truck"("userID");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_truckID_fkey" FOREIGN KEY ("truckID") REFERENCES "Truck"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Truck" ADD CONSTRAINT "Truck_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RouteToTruck" ADD CONSTRAINT "_RouteToTruck_A_fkey" FOREIGN KEY ("A") REFERENCES "Route"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RouteToTruck" ADD CONSTRAINT "_RouteToTruck_B_fkey" FOREIGN KEY ("B") REFERENCES "Truck"("id") ON DELETE CASCADE ON UPDATE CASCADE;
