/*
  Warnings:

  - You are about to drop the column `name` on the `tasks` table. All the data in the column will be lost.
  - You are about to drop the column `size` on the `tasks` table. All the data in the column will be lost.
  - Added the required column `timeSpam` to the `tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `tasks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tasks" DROP COLUMN "name",
DROP COLUMN "size",
ADD COLUMN     "timeSpam" INTEGER NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;
