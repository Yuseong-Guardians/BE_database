import { Module } from '@nestjs/common';
import { HonorService } from './honor.service';
import { HonorController } from './honor.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [HonorService],
  controllers: [HonorController],
})
export class HonorModule {}
