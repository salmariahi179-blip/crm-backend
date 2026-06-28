import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { OpportunityStage } from '@prisma/client';

@Injectable()
export class DashboardService {
  constructor(private prisma: PrismaService) {}

  async getStats() {
    const totalClients = await this.prisma.client.count();

    const totalOpportunities = await this.prisma.opportunity.count();

    const opportunities = await this.prisma.opportunity.findMany();

    const pipelineValue = opportunities.reduce(
      (sum, opp) => sum + opp.amount,
      0,
    );

    const won = await this.prisma.opportunity.count({
      where: { stage: OpportunityStage.WON },
    });

    const lost = await this.prisma.opportunity.count({
      where: { stage: OpportunityStage.LOST },
    });

    const now = new Date();

    const lateOpportunities = await this.prisma.opportunity.count({
      where: {
        expectedCloseDate: {
          lt: now,
        },
        stage: {
          notIn: [OpportunityStage.WON, OpportunityStage.LOST],
        },
      },
    });

    return {
      totalClients,
      totalOpportunities,
      pipelineValue,
      won,
      lost,
      lateOpportunities,
    };
  }
}
