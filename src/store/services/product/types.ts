export type Product = {
  id: number;
  name: string;
  unit: string;
  itemId: string;
  imageUrl: string;
  sizes: Size[];
  description: string;
  categoryUUID: string;
};

export type Size = {
  id: number;
  price: number;
  positionGrams: number;
  unit: string;
};
