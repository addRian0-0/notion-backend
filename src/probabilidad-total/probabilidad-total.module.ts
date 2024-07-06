import { Module } from '@nestjs/common';
import { ProbabilidadTotalService } from './probabilidad-total.service';
import { ProbabilidadTotalController } from './probabilidad-total.controller';

@Module({
  controllers: [ProbabilidadTotalController],
  providers: [ProbabilidadTotalService],
})
export class ProbabilidadTotalModule {}
