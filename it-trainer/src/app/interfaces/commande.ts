import { Formation } from "./formation";


export interface Commande {
    id?: number
    formations?: Formation[]
    date_validation?: Date
    solde?:number
}
