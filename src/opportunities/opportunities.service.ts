import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOpportunityDto } from './dto/create-opportunity.dto';
import { UpdateOpportunityDto } from './dto/update-opportunity.dto';

@Injectable()
export class OpportunitiesService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateOpportunityDto) {
    return this.prisma.opportunity.create({
      data: {
        ...dto,
        expectedCloseDate: new Date(dto.expectedCloseDate),
      },
    });
  }

  async findAll(query: any) {
    const { stage, clientType, page = 1, limit = 10 } = query;

    return this.prisma.opportunity.findMany({
      where: {
        stage: stage || undefined,
        client: clientType ? { type: clientType } : undefined,
      },
      include: {
        client: true,
      },
      skip: (page - 1) * limit,
      take: Number(limit),
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: string) {
    const opp = await this.prisma.opportunity.findUnique({
      where: { id },
      include: { client: true },
    });

    if (!opp) {
      throw new NotFoundException('Opportunity not found');
    }

    return opp;
  }

  async update(id: string, dto: UpdateOpportunityDto) {
    await this.findOne(id);

    return this.prisma.opportunity.update({
      where: { id },
      data: {
        ...dto,
        expectedCloseDate: dto.expectedCloseDate
          ? new Date(dto.expectedCloseDate)
          : undefined,
      },
    });
  }

  async remove(id: string) {
    await this.findOne(id);

    return this.prisma.opportunity.delete({
      where: { id },
    });
  }
}