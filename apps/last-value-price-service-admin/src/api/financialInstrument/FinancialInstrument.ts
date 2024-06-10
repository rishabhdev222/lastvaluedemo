import { PriceRecord } from "../priceRecord/PriceRecord";

export type FinancialInstrument = {
  createdAt: Date;
  id: string;
  priceRecords?: Array<PriceRecord>;
  updatedAt: Date;
};
