import { Module } from "@nestjs/common";
import { BatchRunModuleBase } from "./base/batchRun.module.base";
import { BatchRunService } from "./batchRun.service";
import { BatchRunController } from "./batchRun.controller";
import { BatchRunResolver } from "./batchRun.resolver";

@Module({
  imports: [BatchRunModuleBase],
  controllers: [BatchRunController],
  providers: [BatchRunService, BatchRunResolver],
  exports: [BatchRunService],
})
export class BatchRunModule {}
