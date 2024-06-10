import { FinancialInstrumentWhereUniqueInput } from "../financialInstrument/FinancialInstrumentWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type PriceRecordCreateInput = {
  asOf?: Date | null;
  financialInstrument?: FinancialInstrumentWhereUniqueInput | null;
  payload?: InputJsonValue;
};
