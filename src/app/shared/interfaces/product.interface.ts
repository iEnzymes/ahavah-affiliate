import { IImage } from './image.interface';

export interface IProduct {
  id: number;
  images: IImage[];
  name: string;
  description: string;
  link: string;
  date_added: Date;
  updated_at: Date;
  category: string;
  subcategory: string;
  tag: number[];
}
