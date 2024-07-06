import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { RiesgoParticion, RiesgoParticionSchema } from './riesgo-particion.entity'; // Ajusta la ruta según tu estructura de archivos
import { IsPositive } from 'class-validator';

@Schema()
export class RiesgoTotal extends Document {

    @Prop({
        unique:true
    })
    @IsPositive()
    id: number;

    @Prop({ type: [{ type: RiesgoParticionSchema }] })
    riesgosParciales: RiesgoParticion[];

    // Otras propiedades del RiesgoTotal, si las hay
}

export const RiesgoTotalSchema = SchemaFactory.createForClass(RiesgoTotal);

