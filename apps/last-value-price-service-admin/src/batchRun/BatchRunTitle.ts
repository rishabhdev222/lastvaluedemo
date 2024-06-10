import { BatchRun as TBatchRun } from "../api/batchRun/BatchRun";

export const BATCHRUN_TITLE_FIELD = "id";

export const BatchRunTitle = (record: TBatchRun): string => {
  return record.id?.toString() || String(record.id);
};
