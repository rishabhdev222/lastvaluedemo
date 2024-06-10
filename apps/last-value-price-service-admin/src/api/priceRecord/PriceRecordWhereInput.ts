import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FinancialInstrumentWhereUniqueInput } from "../financialInstrument/FinancialInstrumentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type PriceRecordWhereInput = {
  asOf?: DateTimeNullableFilter;
  financialInstrument?: FinancialInstrumentWhereUniqueInput;
  id?: StringFilter;
  payload?: JsonFilter;
};
