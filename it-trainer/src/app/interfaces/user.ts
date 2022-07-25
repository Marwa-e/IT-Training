import { Client } from "./client";
import { DetailsUser } from "./details-user";
import { Entreprise } from "./entreprise";
import { Niveau } from "./niveau";

export interface User extends Client {
    id?: number
    password?: string
    niveau?: Niveau
    entreprise?: Entreprise
    details?: DetailsUser
}
