import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { ProbabilidadTotalService } from './probabilidad-total.service';
import { CreateProbabilidadTotalDto } from './dto/probabilidad-total/create-probabilidad-total.dto';
import { UpdateProbabilidadTotalDto } from './dto/probabilidad-total/update-probabilidad-total.dto';

@Controller('probabilidad-total')
export class ProbabilidadTotalController {
  constructor(private readonly probabilidadTotalService: ProbabilidadTotalService) {}

  @Post()
  create(@Body() createProbabilidadTotalDto: CreateProbabilidadTotalDto) {
    return this.probabilidadTotalService.create(createProbabilidadTotalDto);
  }

  @Get()
  findAll() {
    return this.probabilidadTotalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.probabilidadTotalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProbabilidadTotalDto: UpdateProbabilidadTotalDto) {
    return this.probabilidadTotalService.update(+id, updateProbabilidadTotalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.probabilidadTotalService.remove(+id);
  }
}
