import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { HonorService } from './honor.service';
import { honor } from '@prisma/client';

@Controller('yuseong/app/honor')
export class HonorController {
  constructor(private readonly honorService: HonorService) {}

  // 전체 조회
  @Get()
  async getAllHonors(): Promise<honor[]> {
    return this.honorService.findAll();
  }

  // 단건 조회
  @Get(':honor_number')
  async getHonor(@Param('honor_number') honorNumber: number): Promise<honor> {
    return this.honorService.findOne(Number(honorNumber));
  }

  // 등록
  @Post('registeration')
  async createHonor(@Body() honorData: honor): Promise<honor> {
    return this.honorService.createHonor(honorData);
  }

  // 수정
  @Patch(':honor_number')
  async updateHonor(
    @Param('honor_number') honorNumber: number,
    @Body() honorData: Partial<honor>,
  ): Promise<honor> {
    return this.honorService.updateHonor(Number(honorNumber), honorData);
  }

  // 삭제
  @Delete(':honor_number')
  async deleteHonor(@Param('honor_number') honorNumber: number): Promise<void> {
    await this.honorService.deleteHonor(Number(honorNumber));
  }
}
