import { IsDateString, IsEnum, IsNumber, IsString } from 'class-validator';

export enum OpportunityStage {
  LEAD = 'LEAD',
  QUALIFIED = 'QUALIFIED',
  PROPOSAL = 'PROPOSAL',
  NEGOTIATION = 'NEGOTIATION',
  WON = 'WON',
  LOST = 'LOST',
}

export class CreateOpportunityDto {
  @IsString()
  title: string;

  @IsNumber()
  amount: number;

  @IsEnum(OpportunityStage)
  stage: OpportunityStage;

  @IsDateString()
  expectedCloseDate: string;

  @IsString()
  clientId: string;
}