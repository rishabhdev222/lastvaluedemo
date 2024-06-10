import { SortOrder } from "../../util/SortOrder";

export type PriceRecordOrderByInput = {
  asOf?: SortOrder;
  createdAt?: SortOrder;
  financialInstrumentId?: SortOrder;
  id?: SortOrder;
  payload?: SortOrder;
  updatedAt?: SortOrder;
};
