import { Categorie } from "./categorie"
import { Email } from "./email"
import { Telephone } from "./telephone"

export interface Formateur {
    id?: number
    nom?: string
    prenom?: string
    email?: Email
    telephones?: Telephone[]
    categories?:Categorie[]
}
