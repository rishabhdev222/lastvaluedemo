import { SortOrder } from "../../util/SortOrder";

export type BatchRunOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
