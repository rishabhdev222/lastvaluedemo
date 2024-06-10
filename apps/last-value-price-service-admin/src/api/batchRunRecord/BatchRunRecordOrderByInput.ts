import { SortOrder } from "../../util/SortOrder";

export type BatchRunRecordOrderByInput = {
  batchRunId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  priceRecord?: SortOrder;
  updatedAt?: SortOrder;
};
