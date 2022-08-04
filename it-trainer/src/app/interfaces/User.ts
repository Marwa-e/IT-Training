import { Adresse } from "./adresse";
import { Commande } from "./commande";

export interface User {
    id?:number
    userName?:string
    password?:string
    authorities?:string
    roles?:string;
    nom?:string
    prenom?:string
    email?:string
    adresse?:Adresse
    telephone?:string
    currentCommand?:Commande
    historyOfCommand?:Commande[]
}
