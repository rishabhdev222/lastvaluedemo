import { PriceRecord as TPriceRecord } from "../api/priceRecord/PriceRecord";

export const PRICERECORD_TITLE_FIELD = "id";

export const PriceRecordTitle = (record: TPriceRecord): string => {
  return record.id?.toString() || String(record.id);
};
