-- DropForeignKey
ALTER TABLE "Opportunity" DROP CONSTRAINT "Opportunity_clientId_fkey";

-- DropEnum
DROP TYPE "Stage";

-- AddForeignKey
ALTER TABLE "Opportunity" ADD CONSTRAINT "Opportunity_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;
