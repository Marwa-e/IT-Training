import { Categorie } from "./categorie"
import { Telephone } from "./telephone"

export interface Formateur {
    id?: number
    nom?: string
    prenom?: string
    email?: string
    telephone?: Telephone
    categorie?:Categorie
    lienPhoto?: string
}
