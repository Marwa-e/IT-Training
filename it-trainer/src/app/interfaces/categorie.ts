export interface Categorie {
    id?: number;
    intitule?: string;
    meres?: Categorie[]
    filles?: Categorie[]
}
