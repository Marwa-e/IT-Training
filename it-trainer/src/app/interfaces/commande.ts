import { Produit } from "./produit";
import { User } from "./user";

export interface Commande {
    id?: number
    produits?: Produit[]
    user?:User
    date_validation?: Date
}
