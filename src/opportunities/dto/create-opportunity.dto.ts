import { OpportunityStage } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEnum, IsNumber, IsString } from 'class-validator';

export class CreateOpportunityDto {
  @ApiProperty({
    example: 'Migration CRM',
    description: "Titre de l'opportunité",
  })
  @IsString()
  title: string;

  @ApiProperty({
    example: 15000,
    description: "Montant de l'opportunité",
  })
  @IsNumber()
  amount: number;

  @ApiProperty({
    enum: OpportunityStage,
    example: OpportunityStage.LEAD,
    description: 'Étape du pipeline',
  })
  @IsEnum(OpportunityStage)
  stage: OpportunityStage;

  @ApiProperty({
    example: '2026-08-15',
    description: 'Date prévue de signature',
  })
  @IsDateString()
  expectedCloseDate: string;

  @ApiProperty({
    example: 'cmcxyz123456789',
    description: 'Identifiant du client',
  })
  @IsString()
  clientId: string;
}
