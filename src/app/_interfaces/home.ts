import { Product } from "./product";

export interface Home {
    header: Header;
    categories: Category[];
    categories_products: Categoriesproduct[];
    events: Event[];
  }
  
  export interface Event {
    id: number;
    title: string;
    shortdescription: string;
    created_at: string;
    image_link: string;
  }
  
  interface Categoriesproduct {
    id: number;
    name: string;
    image: string;
    products: Product[];
  }
  

  interface Category {
    id: number;
    name: string;
    image_url: string;
  }
  
  interface Header {
    image: string;
    desc: string;
  }
  
  