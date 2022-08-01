import { Adresse } from "./adresse";
import { Formateur } from "./formateur";
import { Niveau } from "./niveau";

export interface Formation{
    id?: number
    intitule?: string
    description?: string
    duree?: number
    date_debut?: Date
    prix?: number
    niveau?:string
    lieu?: Adresse
    lien_Test?: string
    formateurs?:Formateur[]
}
