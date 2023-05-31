import { Controller, Get } from '@nestjs/common';
import { Fund } from './fund.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Controller('fund')
export class FundController {
  constructor(
    @InjectRepository(Fund)
    private readonly FundRepo: Repository<Fund>,
  ) {}

  @Get('list')
  public async getList() {
    this.FundRepo.findOne({});
  }
}
