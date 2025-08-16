import { IImage } from './image.interface';

export interface IRoom {
  id: number;
  name: string;
  description: string;
  images: IImage[];
  quote?: string;
  date_added: Date;
  updated_at: Date;
}
