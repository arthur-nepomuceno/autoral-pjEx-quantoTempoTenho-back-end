/*
  Warnings:

  - You are about to drop the column `timeSpam` on the `tasks` table. All the data in the column will be lost.
  - Added the required column `timeSpan` to the `tasks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tasks" DROP COLUMN "timeSpam",
ADD COLUMN     "timeSpan" INTEGER NOT NULL;
