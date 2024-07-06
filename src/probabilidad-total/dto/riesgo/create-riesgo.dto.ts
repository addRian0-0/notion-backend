import { IsPositive, IsString, IsNumber, MinLength, Max, Min } from 'class-validator';

export class CreateRiesgoDto {
    @IsPositive()
    id: number;

    @IsString()
    @MinLength(4)
    nombre: string;

    @IsNumber()
    @IsPositive()
    @Max(100)
    @Min(0)
    impacto: number;

    @IsNumber()
    @IsPositive()
    @Max(100)
    @Min(0)
    probabilidad: number;
}