import { Adresse } from "./adresse";

export interface Client {
    id?:number
    nom?:string
    prenom?:string
    email?:string
    adresse?:Adresse
}
