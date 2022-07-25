import { Adresse } from "./adresse"

export interface DetailsUser {
    id?:number
    adresses?:Adresse[]
    telephone?:string
}
