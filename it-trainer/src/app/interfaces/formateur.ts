import { Categorie } from "./categorie"

export interface Formateur {
    id?: number
    nom?: string
    prenom?: string
    email?: string
    telephone?: string
    categorie?:Categorie
}
