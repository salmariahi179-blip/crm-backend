import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { OpportunitiesModule } from './opportunities/opportunities.module';
import { ClientsModule } from './clients/clients.module';

@Module({
  imports: [PrismaModule, OpportunitiesModule, ClientsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
