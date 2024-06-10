import { FinancialInstrument } from "../financialInstrument/FinancialInstrument";
import { JsonValue } from "type-fest";

export type PriceRecord = {
  asOf: Date | null;
  createdAt: Date;
  financialInstrument?: FinancialInstrument | null;
  id: string;
  payload: JsonValue;
  updatedAt: Date;
};
