import { BatchRunRecordCreateNestedManyWithoutBatchRunsInput } from "./BatchRunRecordCreateNestedManyWithoutBatchRunsInput";

export type BatchRunCreateInput = {
  batchRunRecords?: BatchRunRecordCreateNestedManyWithoutBatchRunsInput;
  status?: "Option1" | null;
};
