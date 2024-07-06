import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProbabilidadTotalService } from './probabilidad-total/probabilidad-total.service';
import { ProbabilidadTotalModule } from './probabilidad-total/probabilidad-total.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [ProbabilidadTotalModule, CommonModule],
  controllers: [AppController],
  providers: [AppService, ProbabilidadTotalService ],
})
export class AppModule {}
