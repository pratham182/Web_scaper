-- CreateTable
CREATE TABLE "branch" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "branch_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "rollno" INTEGER NOT NULL,
    "branchName" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("rollno")
);

-- CreateTable
CREATE TABLE "Subject" (
    "id" SERIAL NOT NULL,
    "subjectCode" TEXT NOT NULL,
    "subjectName" TEXT NOT NULL,
    "maxMarks" INTEGER NOT NULL,
    "internalMax" INTEGER NOT NULL,
    "credit" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Subject_pkey" PRIMARY KEY ("subjectCode")
);

-- CreateTable
CREATE TABLE "Mark" (
    "id" SERIAL NOT NULL,
    "marksObtained" INTEGER NOT NULL,
    "gradePoint" DOUBLE PRECISION NOT NULL,
    "internalObtained" INTEGER NOT NULL,
    "studentId" INTEGER NOT NULL,
    "subjectId" TEXT NOT NULL,

    CONSTRAINT "Mark_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_rollno_key" ON "Student"("rollno");

-- CreateIndex
CREATE UNIQUE INDEX "Subject_subjectCode_key" ON "Subject"("subjectCode");

-- CreateIndex
CREATE UNIQUE INDEX "Mark_studentId_subjectId_key" ON "Mark"("studentId", "subjectId");

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_branchName_fkey" FOREIGN KEY ("branchName") REFERENCES "branch"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mark" ADD CONSTRAINT "Mark_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("rollno") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mark" ADD CONSTRAINT "Mark_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("subjectCode") ON DELETE RESTRICT ON UPDATE CASCADE;
