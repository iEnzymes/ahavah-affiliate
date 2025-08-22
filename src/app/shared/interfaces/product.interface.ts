import { IImage } from './image.interface';

export interface IProduct {
  id: number;
  name: string;
  description: string;
  images?: IImage[];
  image: IImage;
  link: string;
  date_added: Date;
  updated_at: Date;
  category: string;
  subcategory: string;
  tag: number[];
}
