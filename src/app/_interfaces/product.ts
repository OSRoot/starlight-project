export interface AllProducts {
    categories: Category[];
    products: Product[];
  }
  

 export interface Category {
    id: string;
    name: string;
    created_at: string;
    updated_at: string;
    image_url: string;
  }
  
  

export interface Product {
    id: number;
    title: string;
    shortdescription: string;
    description: string;
    alt_text: (null | string)[];
    focus_keyword?: any;
    social_title?: any;
    social_image: string;
    social_description?: any;
    social_alt_text?: any;
    meta_title?: any;
    meta_link?: any;
    meta_description?: any;
    category_id: number;
    deleted_at?: any;
    created_at: string;
    updated_at: string;
    images_url: string[];
  }
  
  