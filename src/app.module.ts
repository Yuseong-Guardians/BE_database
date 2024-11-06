import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HonorModule } from './honor/honor.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, HonorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
