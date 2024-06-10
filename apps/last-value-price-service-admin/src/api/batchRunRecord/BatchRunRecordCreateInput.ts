import { BatchRunWhereUniqueInput } from "../batchRun/BatchRunWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type BatchRunRecordCreateInput = {
  batchRun?: BatchRunWhereUniqueInput | null;
  priceRecord?: InputJsonValue;
};
