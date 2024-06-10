import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BatchRunService } from "./batchRun.service";
import { BatchRunControllerBase } from "./base/batchRun.controller.base";

@swagger.ApiTags("batchRuns")
@common.Controller("batchRuns")
export class BatchRunController extends BatchRunControllerBase {
  constructor(protected readonly service: BatchRunService) {
    super(service);
  }
}
