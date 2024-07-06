import { PartialType } from "@nestjs/mapped-types";
import { CreateMiembro } from "./create-miembor.dto"

export class UpdateMiembro extends PartialType(CreateMiembro) {
    
}