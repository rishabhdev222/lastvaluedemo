import { BatchRunWhereInput } from "./BatchRunWhereInput";
import { BatchRunOrderByInput } from "./BatchRunOrderByInput";

export type BatchRunFindManyArgs = {
  where?: BatchRunWhereInput;
  orderBy?: Array<BatchRunOrderByInput>;
  skip?: number;
  take?: number;
};
