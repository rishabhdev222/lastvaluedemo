import { PriceRecordCreateNestedManyWithoutFinancialInstrumentsInput } from "./PriceRecordCreateNestedManyWithoutFinancialInstrumentsInput";

export type FinancialInstrumentCreateInput = {
  priceRecords?: PriceRecordCreateNestedManyWithoutFinancialInstrumentsInput;
};
