import { Injectable } from "@nestjs/common";
import { BatchActionInput } from "../batchProcessing/BatchActionInput";
import { PriceRecordOutput } from "../batchProcessing/PriceRecordOutput";

@Injectable()
export class BatchProcessingService {
  constructor() {}
  async CancelBatchRun(args: BatchActionInput): Promise<BatchActionInput> {
    throw new Error("Not implemented");
  }
  async CompleteBatchRun(args: BatchActionInput): Promise<BatchActionInput> {
    throw new Error("Not implemented");
  }
  async FetchLastPriceRecord(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async GetLastPriceRecord(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async RetrieveLatestPriceRecord(args: string): Promise<PriceRecordOutput> {
    throw new Error("Not implemented");
  }
  async StartBatchRun(args: BatchActionInput): Promise<BatchActionInput> {
    throw new Error("Not implemented");
  }
  async UploadRecords(args: BatchActionInput[]): Promise<BatchActionInput> {
    throw new Error("Not implemented");
  }
}
