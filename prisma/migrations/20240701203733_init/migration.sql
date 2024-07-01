/*
  Warnings:

  - The primary key for the `Student` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `Mark` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Mark" DROP CONSTRAINT "Mark_studentId_fkey";

-- DropForeignKey
ALTER TABLE "Mark" DROP CONSTRAINT "Mark_subjectId_fkey";

-- AlterTable
ALTER TABLE "Student" DROP CONSTRAINT "Student_pkey",
ALTER COLUMN "rollno" SET DATA TYPE BIGINT,
ADD CONSTRAINT "Student_pkey" PRIMARY KEY ("rollno");

-- DropTable
DROP TABLE "Mark";
