import { Injectable } from '@nestjs/common';

import { CreateProbabilidadTotalDto } from './dto/probabilidad-total/create-probabilidad-total.dto';
import { UpdateProbabilidadTotalDto } from './dto/probabilidad-total/update-probabilidad-total.dto';

@Injectable()
export class ProbabilidadTotalService {
  create(createProbabilidadTotalDto: CreateProbabilidadTotalDto) {
    return 'This action adds a new probabilidadTotal';
  }

  findAll() {
    return `This action returns all probabilidadTotal`;
  }

  findOne(id: number) {
    return `This action returns a #${id} probabilidadTotal`;
  }

  update(id: number, updateProbabilidadTotalDto: UpdateProbabilidadTotalDto) {
    return `This action updates a #${id} probabilidadTotal`;
  }

  remove(id: number) {
    return `This action removes a #${id} probabilidadTotal`;
  }
}
