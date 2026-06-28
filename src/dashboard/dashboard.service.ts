import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DashboardService {
  constructor(private prisma: PrismaService) {}

  async getPipeline() {
    const byStage = await this.prisma.opportunity.groupBy({
      by: ['stage'],
      _sum: {
        amount: true,
      },
      _count: true,
    });

    const total = await this.prisma.opportunity.aggregate({
      _sum: {
        amount: true,
      },
      _count: true,
    });

    return {
      totalValue: total._sum.amount || 0,
      totalCount: total._count,
      byStage,
    };
  }
}
