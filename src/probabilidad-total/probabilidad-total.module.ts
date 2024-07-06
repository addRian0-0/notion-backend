import { Module } from '@nestjs/common';
import { ProbabilidadTotalService } from './probabilidad-total.service';
import { ProbabilidadTotalController } from './probabilidad-total.controller';
import { MiembroService } from './miembro/miembro.service';

@Module({
  controllers: [ ProbabilidadTotalController ],
  providers: [ ProbabilidadTotalService, MiembroService],
  exports: [ MiembroService ]
})
export class ProbabilidadTotalModule {}
