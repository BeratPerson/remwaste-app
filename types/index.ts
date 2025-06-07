export interface Skip {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: number | null;
  per_tonne_cost: number | null;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: string;
  forbidden: boolean;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
  created_at: string;
  updated_at: string;
}

export interface SkipWithDetails extends Skip {
  name: string;
  imageUrl: string;
  dimensions: {
    length: number;
    width: number;
    height: number;
  };
} 