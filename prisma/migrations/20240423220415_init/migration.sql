-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('like', 'comment', 'follow');

-- CreateEnum
CREATE TYPE "Levels" AS ENUM ('SeasonedPro', 'LearningEnthusiast', 'ProjectExplorer', 'TechStudent', 'TechExplorer');

-- CreateEnum
CREATE TYPE "Goals" AS ENUM ('BuildPortfolio', 'OpenSource', 'NewLanguage', 'SideProject', 'CodingEvents');

-- CreateEnum
CREATE TYPE "Tech" AS ENUM ('html5', 'js', 'css', 'node', 'react', 'vue', 'angular', 'express', 'mongodb', 'next', 'd3', 'typescript', 'graphql', 'three');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "level" "Levels" NOT NULL,
    "bio" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "goal" "Goals" NOT NULL,
    "image" TEXT,
    "onboardingStep" INTEGER DEFAULT 1,
    "tech" "Tech"[] DEFAULT ARRAY[]::"Tech"[],
    "username" TEXT,
    "clerkID" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "comment" TEXT,
    "likes" INTEGER,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ownerId" INTEGER NOT NULL,
    "actionById" INTEGER NOT NULL,
    "type" "NotificationType" NOT NULL,
    "postId" INTEGER NOT NULL,
    "read" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_UserFollows" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_clerkID_key" ON "User"("clerkID");

-- CreateIndex
CREATE UNIQUE INDEX "_UserFollows_AB_unique" ON "_UserFollows"("A", "B");

-- CreateIndex
CREATE INDEX "_UserFollows_B_index" ON "_UserFollows"("B");

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_actionById_fkey" FOREIGN KEY ("actionById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserFollows" ADD CONSTRAINT "_UserFollows_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserFollows" ADD CONSTRAINT "_UserFollows_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
