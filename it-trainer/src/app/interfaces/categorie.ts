export interface Categorie {
    id?: number;
    intitule?: string;
    parents?: Categorie[]
    enfants?: Categorie[]
}
