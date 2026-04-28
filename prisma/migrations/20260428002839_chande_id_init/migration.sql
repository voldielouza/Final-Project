/*
  Warnings:

  - You are about to drop the column `userID` on the `routes` table. All the data in the column will be lost.
  - Added the required column `userId` to the `routes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "routes" DROP COLUMN "userID",
ADD COLUMN     "userId" INTEGER NOT NULL;
