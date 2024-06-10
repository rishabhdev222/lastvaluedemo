import { FinancialInstrument as TFinancialInstrument } from "../api/financialInstrument/FinancialInstrument";

export const FINANCIALINSTRUMENT_TITLE_FIELD = "id";

export const FinancialInstrumentTitle = (
  record: TFinancialInstrument
): string => {
  return record.id?.toString() || String(record.id);
};
