-- CreateTable
CREATE TABLE "Post" (
    "personid" INTEGER NOT NULL,
    "lastname" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("personid")
);
