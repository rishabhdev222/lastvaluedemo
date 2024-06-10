import { BatchRun } from "../batchRun/BatchRun";
import { JsonValue } from "type-fest";

export type BatchRunRecord = {
  batchRun?: BatchRun | null;
  createdAt: Date;
  id: string;
  priceRecord: JsonValue;
  updatedAt: Date;
};
