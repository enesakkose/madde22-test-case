export type IconNameTypes = 
  | "logo"
  | "search"
  | "calendar"
  | "location"
  | "checkboxSelected"
  | "added"
  | "add"
  | "filter"
  
export type EVENT = {
  id: number;
  title: string;
  location: string;
  info: string;
  image: string;
  genre: string;
  genreColor: string;
  date: number;
}