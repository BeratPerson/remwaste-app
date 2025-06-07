import { Skip } from '../types';

export function getTotalPrice(skip: Skip): number {
  const vatAmount = skip.price_before_vat * (skip.vat / 100);
  return skip.price_before_vat + vatAmount + (skip.transport_cost || 0);
} 