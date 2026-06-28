import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { OpportunitiesModule } from './opportunities/opportunities.module';
import { ClientsModule } from './clients/clients.module';
import { DashboardModule } from './dashboard/dashboard.module';

@Module({
  imports: [PrismaModule, OpportunitiesModule, ClientsModule, DashboardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
