import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsPositive, IsString, IsNumber, MinLength, Max, Min } from 'class-validator';

@Schema()
export class RiesgoParticion extends Document {

    @Prop({ required: true , unique: true })
    @IsPositive()
    id: number;

    @Prop({ required: true })
    @IsString()
    @MinLength(4)
    nombre: string;

    @Prop({ required: true })
    @IsNumber()
    @IsPositive()
    @Max(100)
    @Min(0)
    impacto: number;

    @Prop({ required: true })
    @IsNumber()
    @IsPositive()
    @Max(100)
    @Min(0)
    probabilidad: number;
}

export const RiesgoParticionSchema = SchemaFactory.createForClass(RiesgoParticion);
