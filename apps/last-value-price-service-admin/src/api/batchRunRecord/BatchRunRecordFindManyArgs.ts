import { BatchRunRecordWhereInput } from "./BatchRunRecordWhereInput";
import { BatchRunRecordOrderByInput } from "./BatchRunRecordOrderByInput";

export type BatchRunRecordFindManyArgs = {
  where?: BatchRunRecordWhereInput;
  orderBy?: Array<BatchRunRecordOrderByInput>;
  skip?: number;
  take?: number;
};
