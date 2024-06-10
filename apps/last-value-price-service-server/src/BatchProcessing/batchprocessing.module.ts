import { Module } from "@nestjs/common";
import { BatchProcessingService } from "./batchprocessing.service";
import { BatchProcessingController } from "./batchprocessing.controller";
import { BatchProcessingResolver } from "./batchprocessing.resolver";

@Module({
  controllers: [BatchProcessingController],
  providers: [BatchProcessingService, BatchProcessingResolver],
  exports: [BatchProcessingService],
})
export class BatchProcessingModule {}
