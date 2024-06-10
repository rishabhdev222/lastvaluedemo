import * as graphql from "@nestjs/graphql";
import { BatchRunResolverBase } from "./base/batchRun.resolver.base";
import { BatchRun } from "./base/BatchRun";
import { BatchRunService } from "./batchRun.service";

@graphql.Resolver(() => BatchRun)
export class BatchRunResolver extends BatchRunResolverBase {
  constructor(protected readonly service: BatchRunService) {
    super(service);
  }
}
