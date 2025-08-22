export interface ICategory {
  id: number;
  name: string;
  description: string;
  image: string;
  quote?: string;
  sort: number;
  date_added: Date;
  updated_at: Date;
  subcategories: number[];
}
