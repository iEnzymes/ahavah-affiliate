import { IImage } from './image.interface';

export interface IItemCard {
  id: number;
  name: string;
  description: string;
  image: IImage | string;
  images?: IImage[];
  quote?: string;
  link?: string;
  sort?: number;
  category?: string;
  subcategory?: string | number[];
  tag?: number[];
  date_added?: Date;
  updated_at?: Date;
}
