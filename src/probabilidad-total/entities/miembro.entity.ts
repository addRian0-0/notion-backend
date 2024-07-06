import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Miembro extends Document{
    
    @Prop({
        required: true,
        instance: true,
        unique:   true,
    })
    id: string;

    @Prop({
        required: true,
        instance: true,
    })
    nombre: string;
    
    @Prop({
        required: true,
        instance: true,
    })
    cargo: string

    @Prop({
        required: true,
        instance: true,
    })
    impacto: string;
    
    @Prop({
        required: true,
        instance: true,
    })
    probabilidadFallo: number;

}