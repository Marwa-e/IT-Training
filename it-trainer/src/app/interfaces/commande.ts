import { Formation } from "./formation";


export interface Commande {
    id?: number
    formation?: Formation
    date_validation?: Date
    solde?:number
}
