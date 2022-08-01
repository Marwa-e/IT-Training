import { Adresse } from "./adresse";
import { Client } from "./client";
import { Email } from "./email";

export interface Entreprise {
    id?: number
    raison_sociale?: string
    contactNom?: string
    contactPrenom?: string
    password?:string
    telephone?: string
    adresses?: Adresse[]
    email?:Email
}
