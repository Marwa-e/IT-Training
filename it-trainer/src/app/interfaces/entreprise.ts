import { Adresse } from "./adresse";
import { Client } from "./client";

export interface Entreprise extends Client{
    id?: number
    raison_sociale?: string
    contactNom?: string
    contactPrenom?: string
}
