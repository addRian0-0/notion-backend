import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';

import { CreateMiembro } from '../dto/miembro/create-miembor.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Miembro } from '../entities/miembro.entity';
import { Model } from 'mongoose';

@Injectable()
export class MiembroService {

    constructor(
        // @InjectModel( )
        // private readonly miembroModel: Model<Miembro>,
        // private readonly configService: ConfigService
      ){
        // this.defaultLimit = configService.get<number>('defaultLimit')
      }

    create( createMiembro: CreateMiembro ) {
        createMiembro.cargo = createMiembro.cargo.toLocaleLowerCase();
        createMiembro.impacto = createMiembro.impacto.toLocaleLowerCase();

        try{
            // this.miembroModel.create( createMiembro );
        }catch( error ){
            this.handleExceptions( error );
        }

      }
    
      findAll() {
        return `This action returns all probabilidadTotal`;
      }
    
      findOne(id: number) {
        return `This action returns a #${id} probabilidadTotal`;
      }
    
      update(id: number ) {
        return `This action updates a #${id} probabilidadTotal`;
      }
    
      remove(id: number) {
        return `This action removes a #${id} probabilidadTotal`;
      }

      private handleExceptions( error: any ){
        if( error.code === 11000 ){
          throw new BadRequestException(`Pokemon exists in db ${ JSON.stringify(error.keyValue) }`)
        }
        console.log(error);
        throw new InternalServerErrorException(`Can't create Pokemon - Check Server logs`);
      }

}
