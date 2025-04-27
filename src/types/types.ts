export interface ImageTS {
    id: string;
    alt_description: string;
    urls: {
      small: string;
      regular: string;
    };
    user: {
      name: string;
    };
    likes: number;
  }
export interface HeaderProps {
  onSearch: (topic: string) => void;
}

export interface SearchBarProps {
  onSearch: (topic: string) => void;
}

export interface FetchImagesResponse {
  total_pages: number; 
  results: ImageTS[];
}