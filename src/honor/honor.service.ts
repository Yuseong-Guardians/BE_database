import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { honor } from '@prisma/client';

@Injectable()
export class HonorService {
  constructor(private readonly prisma: PrismaService) {}

  // 전체 조회
  async findAll(): Promise<honor[]> {
    const honorData = this.prisma.honor.findMany();

    if (!honorData) {
      throw new NotFoundException('Honor not found');
    }

    return honorData;
  }

  // 단건 조회
  async findOne(honorNumber: number): Promise<honor> {
    const honorData = await this.prisma.honor.findUnique({
      where: { honor_number: honorNumber },
    });

    if (!honorData) {
      throw new NotFoundException('Honor not found');
    }

    return honorData;
  }

  // 등록
  async createHonor(data: honor): Promise<honor> {
    const honorData = this.prisma.honor.create({ data });

    if (!honorData) {
      throw new NotFoundException('Honor not found');
    }

    return honorData;
  }

  // 수정
  async updateHonor(honorNumber: number, data: Partial<honor>): Promise<honor> {
    const updatedHonor = await this.prisma.honor.update({
      where: { honor_number: honorNumber },
      data,
    });

    if (!updatedHonor) {
      throw new NotFoundException('Honor not found');
    }

    return updatedHonor;
  }

  // 삭제
  async deleteHonor(honorNumber: number): Promise<void> {
    const deletedHonor = await this.prisma.honor.delete({
      where: { honor_number: honorNumber },
    });

    if (!deletedHonor) {
      throw new NotFoundException('Honor not found');
    }
  }
}
