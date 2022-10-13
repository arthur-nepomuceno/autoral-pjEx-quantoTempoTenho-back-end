/*
  Warnings:

  - You are about to drop the column `deadline` on the `tasks` table. All the data in the column will be lost.
  - You are about to drop the column `timeSpan` on the `tasks` table. All the data in the column will be lost.
  - Added the required column `limit` to the `tasks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tasks" DROP COLUMN "deadline",
DROP COLUMN "timeSpan",
ADD COLUMN     "limit" TEXT NOT NULL;
