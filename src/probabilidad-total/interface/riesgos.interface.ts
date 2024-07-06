export interface RiesgoI {
    id: number;
    nombre: string;
    impacto: number;
    probabilidad: number;
    calculo?: number;
}

export interface RiesgosCalculados {
    riesgosIndividualesCalculados: RiesgoI[];
    riesgoPonderado: number;
}