import { BatchRunRecord as TBatchRunRecord } from "../api/batchRunRecord/BatchRunRecord";

export const BATCHRUNRECORD_TITLE_FIELD = "id";

export const BatchRunRecordTitle = (record: TBatchRunRecord): string => {
  return record.id?.toString() || String(record.id);
};
