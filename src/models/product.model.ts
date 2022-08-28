export interface ProductsResponseModel {
  count: number;
  page: number;
  products: ProductModel[];
}

export interface ProductModel {
  id: string;
  name: string;
  description: string;
  price: number;
  unitsInStock: number;
  brand: string;
  category: string;
  image?: Blob;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
