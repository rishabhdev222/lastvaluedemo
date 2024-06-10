import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BatchRunRecordService } from "./batchRunRecord.service";
import { BatchRunRecordControllerBase } from "./base/batchRunRecord.controller.base";

@swagger.ApiTags("batchRunRecords")
@common.Controller("batchRunRecords")
export class BatchRunRecordController extends BatchRunRecordControllerBase {
  constructor(protected readonly service: BatchRunRecordService) {
    super(service);
  }
}
