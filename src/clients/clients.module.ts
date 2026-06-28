import { Module } from '@nestjs/common';
import { ClientsService } from './ClientsService';
import { ClientsController } from './clients.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ClientsController],
  providers: [ClientsService],
})
export class ClientsModule {}
