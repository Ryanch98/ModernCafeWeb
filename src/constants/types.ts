// Type definitions for the application
export interface CategoryMenuItem {
  pic: string;
  name: string;
  key: string;
}

export interface MenuItemContent {
  id: number | string;
  name: {
    en: string;
    fa: string;
  };
  price: number;
  description?:
    | {
        en: string;
        fa: string;
      }
    | string;
  image?: string;
  scale?: number;
}

export interface CategoryData {
  [key: string]: {
    title?: {
      en: string;
      fa: string;
    };
    items: MenuItemContent[];
  };
}

export type Language = 'en' | 'fa';
