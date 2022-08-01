
import { Adresse } from "./adresse";
import { Email } from "./email";
import { Entreprise } from "./entreprise";
import { Niveau } from "./niveau";
import { Telephone } from "./telephone";

export interface Internaute {

    id?: number
    nom?: string
    prenom?: string
    email?: Email
    password?: string
    niveau?: Niveau
    adresses?: Adresse[]
    telephones?: Telephone[]
}
