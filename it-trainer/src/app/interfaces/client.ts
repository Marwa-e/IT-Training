import { Adresse } from "./adresse";
import { Commande } from "./commande";

export interface Client {
    id?:number
    password?:string
    nom?:string
    prenom?:string
    email?:string
    adresse?:Adresse
    telephone?:string
    currentCommand?:Commande
    historyOfCommand?:Commande[]
}
