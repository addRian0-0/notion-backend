import { PartialType } from '@nestjs/mapped-types';
import { CreateProbabilidadTotalDto } from './create-probabilidad-total.dto';

export class UpdateProbabilidadTotalDto extends PartialType(CreateProbabilidadTotalDto) {}
