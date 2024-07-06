import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Miembro extends Document{
    
    @Prop({
        instance: true,
        unique:   true,
    })
    id: string;

    @Prop({
        instance: true,
    })
    miembro: string;
    
    @Prop({
        instance: true,
    })
    cargo: string

    @Prop({
        instance: true,
    })
    impacto: string;
    
    @Prop({
        instance: true,
    })
    probabilidadFallo: number;

}