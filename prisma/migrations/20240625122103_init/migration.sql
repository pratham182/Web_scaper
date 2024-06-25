/*
  Warnings:

  - You are about to drop the `Student` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Student";

-- CreateTable
CREATE TABLE "student" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "rollno" INTEGER NOT NULL,

    CONSTRAINT "student_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "student_rollno_key" ON "student"("rollno");
