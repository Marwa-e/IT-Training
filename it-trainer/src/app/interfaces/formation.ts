import { Adresse } from "./adresse";
import { Niveau } from "./niveau";
import { Produit } from "./produit";

export interface Formation extends Produit{
    id?: number
    titre_produit?: string
    description?: string
    duree?: number
    date_debut?: Date
    prix?: number
    niveau?:Niveau
    lieu?: Adresse
    lien_Test?: string
}
