import { IImage } from './image.interface';
import { IRoom } from './room.interface';

export interface IProduct {
  id: number;
  images: IImage[];
  name: string;
  description: string;
  link: string;
  date_added: Date;
  updated_at: Date;
  room: string;
  category: string;
  tag: number[];
}

export interface IProductRoom {
  products: IProduct[];
  room: IRoom;
}
