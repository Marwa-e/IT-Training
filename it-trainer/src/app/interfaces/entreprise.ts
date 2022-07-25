import { Adresse } from "./adresse";
import { Client } from "./client";
import { DetailsUser } from "./details-user";

export interface Entreprise extends Client{
    id?: number;
    raison_sociale?: string;
    telephone?: string;
    details?: DetailsUser;
    adresses?: Adresse[];
}
