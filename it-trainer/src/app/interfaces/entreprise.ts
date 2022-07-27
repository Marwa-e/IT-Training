import { Adresse } from "./adresse";
import { Client } from "./client";
import { DetailsUser } from "./details-user";
import { Email } from "./email";

export interface Entreprise {
    id?: number;
    raison_sociale?: string;
    telephone?: string;
    adresses?: Adresse[];
    email?:Email;
}
