import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { ProbabilidadTotalService } from './probabilidad-total.service';
import { CreateProbabilidadTotalDto } from './dto/probabilidad-total/create-probabilidad-total.dto';
import { UpdateProbabilidadTotalDto } from './dto/probabilidad-total/update-probabilidad-total.dto';
import { RiesgoI } from './interface/riesgos.interface';

@Controller('riesgos')
export class ProbabilidadTotalController {
  constructor(private readonly probabilidadTotalService: ProbabilidadTotalService) {}


  riesgos = [
    {
      "id": 1,
      "nombre": "Riesgo Financiero",
      "impacto": 75,
      "probabilidad": 60
    },
    {
      "id": 2,
      "nombre": "Riesgo Operacional",
      "impacto": 50,
      "probabilidad": 45
    },
    {
      "id": 3,
      "nombre": "Riesgo Tecnológico",
      "impacto": 90,
      "probabilidad": 30
    },
    {
      "id": 4,
      "nombre": "Riesgo Legal",
      "impacto": 40,
      "probabilidad": 20
    },
    {
      "id": 5,
      "nombre": "Riesgo Reputacional",
      "impacto": 65,
      "probabilidad": 55
    }
]; 

  @Post("/calculate")
  create(@Body() createProbabilidadTotalDto: RiesgoI[]) {
    return this.probabilidadTotalService.calculateRiesgos( createProbabilidadTotalDto )
  }

  @Get()
  findAll() {
    let riesgoPonderado: number;
    
    for (const riesgo of this.riesgos) {
      riesgoPonderado = +riesgo.probabilidad
    }
    
    return this.riesgos;
  }

  @Get('riesgo/:id')
  findOne(@Param('id') id: string) {
    
    // const riesgoInteres = this.riesgos.find( riesgo => id === riesgo.id ); 
    // return riesgoInteres;
  }

  @Patch('riesgo/:id')
  update(@Param('id') id: string, @Body() updateProbabilidadTotalDto: UpdateProbabilidadTotalDto) {
    return this.probabilidadTotalService.update(+id, updateProbabilidadTotalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.probabilidadTotalService.remove(+id);
  }

}
