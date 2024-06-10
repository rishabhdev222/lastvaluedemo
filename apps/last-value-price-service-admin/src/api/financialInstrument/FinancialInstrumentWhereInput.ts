import { StringFilter } from "../../util/StringFilter";
import { PriceRecordListRelationFilter } from "../priceRecord/PriceRecordListRelationFilter";

export type FinancialInstrumentWhereInput = {
  id?: StringFilter;
  priceRecords?: PriceRecordListRelationFilter;
};
