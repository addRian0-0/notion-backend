import { IsNumber, IsPositive, IsString, Max, Min, MinLength } from "class-validator";

export class CreateMiembro {
    @IsPositive({
        message: '"id" must be major than 0',
    })
    id:                number;

    @IsString()
    @MinLength(3)
    nombre: string;

    @IsString()
    @MinLength( 4, {
        message: '"cargo" must be more specific'
    })
    cargo:             string;
    @IsString()
    @MinLength( 4, {
        message: '"impacto" must be more specific'
    })
    impacto:           string;
    @IsNumber()
    @Min(0)
    @Max(100)
    probabilidadFallo: string;
}