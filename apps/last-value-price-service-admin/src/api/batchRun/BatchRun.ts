import { BatchRunRecord } from "../batchRunRecord/BatchRunRecord";

export type BatchRun = {
  batchRunRecords?: Array<BatchRunRecord>;
  createdAt: Date;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
};
