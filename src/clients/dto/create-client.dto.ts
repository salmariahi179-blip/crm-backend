import { ClientType } from '@prisma/client';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsOptional, IsString } from 'class-validator';

export class CreateClientDto {
  @ApiProperty({
    enum: ClientType,
    example: ClientType.COMPANY,
    description: 'Type du client',
  })
  @IsEnum(ClientType)
  type: ClientType;

  @ApiProperty({
    example: 'Entreprise ABC',
    description: 'Nom du client',
  })
  @IsString()
  name: string;

  @ApiPropertyOptional({
    example: 'contact@abc.com',
    description: 'Adresse email',
  })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional({
    example: '+21620123456',
    description: 'Numéro de téléphone',
  })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiPropertyOptional({
    example: 'Entreprise ABC',
    description: "Nom de l'entreprise (uniquement si le type est COMPANY)",
  })
  @IsOptional()
  @IsString()
  companyName?: string;

  @ApiPropertyOptional({
    example: 'Tunis, Tunisie',
    description: 'Adresse du client',
  })
  @IsOptional()
  @IsString()
  address?: string;
}
