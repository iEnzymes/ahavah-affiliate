export interface ICategory {
  id: number;
  name: string;
  description: string;
  quote?: string;
  image: string;
  sort: number;
  date_added: Date;
  updated_at: Date;
  subcategories: number[];
}
