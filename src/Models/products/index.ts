export type PaginationProducts = {
  effective_limit: number;
  effective_offset: number;
  next_offset: number;
  effective_page: number;
  next_page: number;
};

export type ParamsProducts = {
  limit: string;
  offset: number;
  page: string;
};

export type Images = {
  url_170x135: string;
};

export type TrendingProduct = {
  listing_id: number;
  title: string;
  price: string;
  description: string;
  currency_code: string;
  url: string;
  sku: string[];
  is_vintage: boolean;
  Images: Images[];
};

export type TrendingProductsResponse = {
  count: number;
  results: TrendingProduct[];
  params: ParamsProducts;
  type: string;
  pagination: PaginationProducts;
};
