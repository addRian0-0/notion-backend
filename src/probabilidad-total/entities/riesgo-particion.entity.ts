import { IsInt, IsNumber, IsPositive, IsString, Max, Min, MinLength } from "class-validator";

export class RiesgoParticion {

    @IsPositive()
    id: number; // independiente del mongo id

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