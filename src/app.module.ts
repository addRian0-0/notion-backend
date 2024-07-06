import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProbabilidadService } from './total/probabilidad/probabilidad.service';
import { ProbabilidadTotalService } from './probabilidad-total/probabilidad-total.service';
import { ProbabilidadTotalModule } from './probabilidad-total/probabilidad-total.module';
import { RiesgoService } from './riesgo/riesgo.service';

@Module({
  imports: [ProbabilidadTotalModule],
  controllers: [AppController],
  providers: [AppService, ProbabilidadService, ProbabilidadTotalService, RiesgoService],
})
export class AppModule {}
