export interface RespuestaHeadLines {
  status: string;
  news: Article[];
  page: number;
}

export interface Article {
  id: string;
  title: string;
  description: string;
  url: string;
  author: string;
  image: string;
  language: string;
  category: string[];
  published: string;
}

// export interface RespuestaHeadLines {
//   status: string;
//   totalResults: number;
//   articles: Article[];
// }

// export interface Article {
//   source: Source;
//   author?: string;
//   title: string;
//   description: string;
//   url: string;
//   urlToImage: string;
//   publishedAt: string;
//   content?: string;
// }

// interface Source {
//   id?: string;
//   name: string;
// }



// export interface RespuestaHeadLines {
//   pagination: Pagination;
//   data: Article[];
// }

// export interface Article {
//   author?: string;
//   title: string;
//   description: string;
//   url: string;
//   source: string;
//   image?: string;
//   category: string;
//   language: string;
//   country: string;
//   published_at: string;
// }

// export interface Pagination {
//   limit: number;
//   offset: number;
//   count: number;
//   total: number;
// }