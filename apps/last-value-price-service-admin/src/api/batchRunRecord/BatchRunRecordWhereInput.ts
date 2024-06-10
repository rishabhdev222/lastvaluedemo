import { BatchRunWhereUniqueInput } from "../batchRun/BatchRunWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type BatchRunRecordWhereInput = {
  batchRun?: BatchRunWhereUniqueInput;
  id?: StringFilter;
  priceRecord?: JsonFilter;
};
