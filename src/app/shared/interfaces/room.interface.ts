export interface IRoom {
  id: number;
  name: string;
  description: string;
  images: IRoomImage[];
  quote?: string;
  date_added: Date;
  updated_at: Date;
}

export interface IRoomImage {
  id: number;
  image: string;
  uploaded_at: Date;
}
