import { FinancialInstrumentWhereInput } from "./FinancialInstrumentWhereInput";
import { FinancialInstrumentOrderByInput } from "./FinancialInstrumentOrderByInput";

export type FinancialInstrumentFindManyArgs = {
  where?: FinancialInstrumentWhereInput;
  orderBy?: Array<FinancialInstrumentOrderByInput>;
  skip?: number;
  take?: number;
};
