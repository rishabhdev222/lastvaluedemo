import { Module } from "@nestjs/common";
import { BatchRunRecordModuleBase } from "./base/batchRunRecord.module.base";
import { BatchRunRecordService } from "./batchRunRecord.service";
import { BatchRunRecordController } from "./batchRunRecord.controller";
import { BatchRunRecordResolver } from "./batchRunRecord.resolver";

@Module({
  imports: [BatchRunRecordModuleBase],
  controllers: [BatchRunRecordController],
  providers: [BatchRunRecordService, BatchRunRecordResolver],
  exports: [BatchRunRecordService],
})
export class BatchRunRecordModule {}
