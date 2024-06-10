import { FinancialInstrumentWhereUniqueInput } from "../financialInstrument/FinancialInstrumentWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type PriceRecordUpdateInput = {
  asOf?: Date | null;
  financialInstrument?: FinancialInstrumentWhereUniqueInput | null;
  payload?: InputJsonValue;
};
