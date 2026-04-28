-- DropIndex
DROP INDEX "orders_truckId_key";

-- AlterTable
ALTER TABLE "orders" ALTER COLUMN "truckId" DROP NOT NULL;
