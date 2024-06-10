import { BatchRunRecordListRelationFilter } from "../batchRunRecord/BatchRunRecordListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type BatchRunWhereInput = {
  batchRunRecords?: BatchRunRecordListRelationFilter;
  id?: StringFilter;
  status?: "Option1";
};
