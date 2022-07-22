import { Adresse } from "./adresse";

export interface Entreprise {
    id?: number;
    raison_sociale?: string;
    telephone?: string;
    id_details?: number;
    adresse?: Adresse;
}
