import { PriceRecordWhereInput } from "./PriceRecordWhereInput";
import { PriceRecordOrderByInput } from "./PriceRecordOrderByInput";

export type PriceRecordFindManyArgs = {
  where?: PriceRecordWhereInput;
  orderBy?: Array<PriceRecordOrderByInput>;
  skip?: number;
  take?: number;
};
