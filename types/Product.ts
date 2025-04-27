
export interface Catalog {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    createdBy?: null;
    updatedBy?: null;
    deletedAt?: null;
    deletedBy?: null;
    name?: string;
    description?: null;
    slug?: string;
    logoUrl?: string;
    whatsappNumber?: string;
    categories?: Category[];
    catalog?: null;
}

export interface Category {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    createdBy?: null;
    updatedBy?: null;
    deletedAt?: null;
    deletedBy?: null;
    businessId?: string;
    name?: string;
    description?: string;
    products?: Product[];
    price?: string;
    imageUrl?: string;
    categoryId?: string;
}

export interface Product {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    createdBy?: null;
    updatedBy?: null;
    deletedAt?: null;
    deletedBy?: null;
    name?: string;
    description?: string;
    price?: string;
    imageUrl?: string;
    businessId?: string;
    categoryId?: string;
}
