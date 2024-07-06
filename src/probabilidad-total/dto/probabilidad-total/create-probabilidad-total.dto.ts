import { IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateRiesgoDto } from '../riesgo/create-riesgo.dto';

export class CreateProbabilidadTotalDto {
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateRiesgoDto)
    riesgosParciales: CreateRiesgoDto[];
}
