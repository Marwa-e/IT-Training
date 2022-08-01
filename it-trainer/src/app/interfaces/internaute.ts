
import { Adresse } from "./adresse";
import { Client } from "./client";
import { Telephone } from "./telephone";

export interface Internaute extends Client {

    id?: number
    nom?: string
    prenom?: string
    niveau?: string
}
