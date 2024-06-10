import { BatchRunWhereUniqueInput } from "../batchRun/BatchRunWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type BatchRunRecordUpdateInput = {
  batchRun?: BatchRunWhereUniqueInput | null;
  priceRecord?: InputJsonValue;
};
