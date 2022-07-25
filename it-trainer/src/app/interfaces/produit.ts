import { Categorie } from "./categorie"
import { Formateur } from "./formateur"
import { Niveau } from "./niveau"

export interface Produit {

    id?:number
    categorie?:Categorie
    formateurs?:Formateur[]
    niveau?:Niveau
    
}
