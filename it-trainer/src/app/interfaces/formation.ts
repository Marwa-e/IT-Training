import { Adresse } from "./adresse";
import { Categorie } from "./categorie";
import { Formateur } from "./formateur";
import { Niveau } from "./niveau";

export interface Formation{
    id: number
    categorie?:Categorie
    intitule?: string
    descriptif?: string
    duree?: number
    date_debut?: Date
    prix?: number
    niveau?:Niveau
    lieu?: Adresse
    lien_Test?: string
    formateur?:Formateur
    lienImage?: string
}
