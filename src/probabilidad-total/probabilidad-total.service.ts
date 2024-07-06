import { Injectable } from '@nestjs/common';
import { v4 as uuid } from "uuid";
import { CreateProbabilidadTotalDto } from './dto/probabilidad-total/create-probabilidad-total.dto';
import { UpdateProbabilidadTotalDto } from './dto/probabilidad-total/update-probabilidad-total.dto';
import { RiesgoI, RiesgosCalculados } from './interface/riesgos.interface';

@Injectable()
export class ProbabilidadTotalService {

  riesgos: RiesgoI[] = [
    {
      id: uuid(),
      nombre: "Riesgo Financiero",
      impacto: 75,
      probabilidad: 60
    },
    {
      id: uuid(),
      nombre: "Riesgo Operacional",
      impacto: 50,
      probabilidad: 45
    },
    {
      id: uuid(),
      nombre: "Riesgo Tecnológico",
      impacto: 90,
      probabilidad: 30
    },
    {
      id: uuid(),
      nombre: "Riesgo Legal",
      impacto: 40,
      probabilidad: 20
    },
    {
      id: uuid(),
      nombre: "Riesgo Reputacional",
      impacto: 65,
      probabilidad: 55
    }
  ];

  

  calculateRiesgos( riesgosF: RiesgoI[]){
    console.log(riesgosF);
    let riesgosCalculadosArr: RiesgosCalculados;
    let arr2 = [];
    riesgosF.forEach(r => {
      let calculo =  (r.impacto / 10) * (r.probabilidad/10);
      let obj = {
        id: r.id,
        nombre: r.nombre,
        impacto: r.impacto,
        probabilidad: r.probabilidad,
        calculo
      }
      arr2.push(obj) 
    })
    let calculoT = 0;

    arr2.map(e => {
      calculoT+= e.calculo
    })
    console.log({
      arr2,
      calculoT
    })
    calculoT = calculoT / arr2.length;
    return {
      arr2,
      calculoT
    };
  }

  create( createProbabilidadTotalDto: CreateProbabilidadTotalDto ) {
    //
  }

  findAll() {
    return `This action returns all probabilidadTotal`;
  }

  findOne(id: number) {
    return `This action returns a #${id} probabilidadTotal`;
  }

  update(id: number, updateProbabilidadTotalDto: UpdateProbabilidadTotalDto) {
    return `This action updates a #${id} probabilidadTotal`;
  }

  remove(id: number) {
    return `This action removes a #${id} probabilidadTotal`;
  }
}
