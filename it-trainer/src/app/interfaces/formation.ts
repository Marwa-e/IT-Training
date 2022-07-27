import { Adresse } from "./adresse";
import { Formateur } from "./formateur";
import { Niveau } from "./niveau";
import { Produit } from "./produit";

export interface Formation{
    id?: number
    titre_produit?: string
    description?: string
    duree?: number
    date_debut?: Date
    prix?: number
    niveau?:Niveau
    lieu?: Adresse
    lien_Test?: string
    formateurs?:Formateur[]
}
