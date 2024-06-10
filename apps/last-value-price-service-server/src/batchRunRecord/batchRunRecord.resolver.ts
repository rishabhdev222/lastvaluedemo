import * as graphql from "@nestjs/graphql";
import { BatchRunRecordResolverBase } from "./base/batchRunRecord.resolver.base";
import { BatchRunRecord } from "./base/BatchRunRecord";
import { BatchRunRecordService } from "./batchRunRecord.service";

@graphql.Resolver(() => BatchRunRecord)
export class BatchRunRecordResolver extends BatchRunRecordResolverBase {
  constructor(protected readonly service: BatchRunRecordService) {
    super(service);
  }
}
