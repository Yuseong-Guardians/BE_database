import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HonorModule } from './honor/honor.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: './.env',
      isGlobal: true,
    }),
    PrismaModule,
    HonorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
