import * as graphql from "@nestjs/graphql";
import { BatchActionInput } from "../batchProcessing/BatchActionInput";
import { PriceRecordOutput } from "../batchProcessing/PriceRecordOutput";
import { BatchProcessingService } from "./batchprocessing.service";

export class BatchProcessingResolver {
  constructor(protected readonly service: BatchProcessingService) {}

  @graphql.Mutation(() => BatchActionInput)
  async CancelBatchRun(
    @graphql.Args()
    args: BatchActionInput
  ): Promise<BatchActionInput> {
    return this.service.CancelBatchRun(args);
  }

  @graphql.Mutation(() => BatchActionInput)
  async CompleteBatchRun(
    @graphql.Args()
    args: BatchActionInput
  ): Promise<BatchActionInput> {
    return this.service.CompleteBatchRun(args);
  }

  @graphql.Query(() => String)
  async FetchLastPriceRecord(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.FetchLastPriceRecord(args);
  }

  @graphql.Query(() => String)
  async GetLastPriceRecord(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetLastPriceRecord(args);
  }

  @graphql.Query(() => PriceRecordOutput)
  async RetrieveLatestPriceRecord(
    @graphql.Args()
    args: string
  ): Promise<PriceRecordOutput> {
    return this.service.RetrieveLatestPriceRecord(args);
  }

  @graphql.Mutation(() => BatchActionInput)
  async StartBatchRun(
    @graphql.Args()
    args: BatchActionInput
  ): Promise<BatchActionInput> {
    return this.service.StartBatchRun(args);
  }

  @graphql.Mutation(() => BatchActionInput)
  async UploadRecords(
    @graphql.Args()
    args: BatchActionInput[]
  ): Promise<BatchActionInput> {
    return this.service.UploadRecords(args);
  }
}
